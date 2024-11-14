import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../style/recipeCard.css'; 

const RecipeCard = ({ image, name, author, id, authorId }) => {
  return (
    <div className="recipe-card">
      {/* 图片和名字跳转到详情页 */}
      <Link to={`/detail/${id}`} className="recipe-image-link">
        <img src={image} alt={name} className="recipe-image" />
      </Link>

      <div className="recipe-details">
        <Link to={`/detail/${id}`} className="recipe-name-link">
          <h3 className="recipe-name">{name}</h3>
        </Link>
        
        {/* 作者跳转到用户页面 */}
        <Link to={``} className="recipe-author-link">
          <p className="recipe-author">{author}</p>
        </Link>
      </div>
    </div>
  );
};

RecipeCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  authorId: PropTypes.number.isRequired
};

export default RecipeCard;
