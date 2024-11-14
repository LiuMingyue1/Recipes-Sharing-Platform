import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from "../components/navbar";
import recipes from '../assets/constants/mockRecipe.json'; 
import comments from '../assets/constants/mockComment.json'; 
import likeIcon from '../assets/like.svg';
import commentIcon from '../assets/comment.svg';
import '../style/detail.css';

const images = import.meta.glob('../assets/*.png', { eager: true }); // 预加载图片

const Detail = () => {
  const { recipeId } = useParams();
  const recipe = recipes.find(r => r.id === parseInt(recipeId));
  const recipeComments = comments.filter(c => c.recipeId === parseInt(recipeId));

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  // 获取匹配的图片路径
  const imageSrc = images[`../assets/${recipe.image.split('/').pop()}`]?.default || recipe.image;

  return (
    <div className="detail-container"> 
      <Navbar currentPageLink="/detail" />
      <div className="recipe-detail">
        {/* 左侧布局 */}
        <div className="detail-left">
          <div className="detail-image-container">
            <img src={imageSrc} alt={recipe.name} className="detail-image" />
          </div>
          <div className="detail-comments">
            <ul>
              {recipeComments.map((comment) => (
                <li key={comment.id} className="comment-item">
                  <div className="comment-header">
                    <span className="comment-username">User {comment.userId}</span>
                    <span className="comment-date">{comment.date}</span>
                  </div>
                  <div className="comment-content">{comment.comment}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 右侧布局 */}
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
              <p>By {recipe.author}</p>
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