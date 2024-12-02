import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from "../components/navbar";
import axios from 'axios';
import likeIcon from '../assets/like.svg';
import commentIcon from '../assets/comment.svg';
import '../style/detail.css';

const Detail = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchRecipeData = async () => {
      try {
        const recipeResponse = await axios.get(`/api/recipes/${recipeId}`);
        setRecipe(recipeResponse.data);

        const commentsResponse = await axios.get(`/api/recipes/${recipeId}/comments`);
        setComments(commentsResponse.data);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    };

    fetchRecipeData();
  }, [recipeId]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detail-container">
      <Navbar currentPageLink="/detail" />
      <div className="recipe-detail">
        <div className="detail-left">
          <div className="detail-image-container">
            <img src={recipe.image} alt={recipe.name} className="detail-image" />
          </div>
          <div className="detail-comments">
            <ul>
              {comments.map((comment) => (
                <li key={comment.commentID} className="comment-item">
                  <div className="comment-header">
                    <span className="comment-username">User {comment.userID}</span>
                    <span className="comment-date">{new Date(comment.commentDate).toLocaleString()}</span>
                  </div>
                  <div className="comment-content">{comment.content}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="detail-right">
          <div className="detail-header-fixed">
            <div className="detail-header">
              <h1>{recipe.name}</h1>
              <div className="detail-icons">
                <img src={commentIcon} alt="Comment" className="icon" />
                <img src={likeIcon} alt="Like" className="icon" />
              </div>
            </div>
            <div className="author-section">
              <Link to={`/profile/${recipe.userID}`} className="recipe-author-link">
                <p>By {recipe.author || "Unknown Author"}</p>
              </Link>
              <button className="follow-button">Follow</button>
            </div>
          </div>
          <div className="detail-scrollable">
            <hr />
            <h3 className="section-title">Ingredients:</h3>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <hr />
            <h3 className="section-title">Steps:</h3>
            <ol>
              {recipe.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
