import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../style/recipeCard.css'; 

const images = import.meta.glob('../assets/*.png', { eager: true }); // 预加载图片

const RecipeCard = ({ image, name, author, id, userId }) => {
  // 解析图片路径
  const imageSrc = images[`../assets/${image.split('/').pop()}`]?.default || image;

  return (
    <div className="recipe-card">
      <Link to={`/detail/${id}`} className="recipe-image-link">
        <img src={imageSrc} alt={name} className="recipe-image" />
      </Link>

      <div className="recipe-details">
        <Link to={`/detail/${id}`} className="recipe-name-link">
          <h3 className="recipe-name">{name}</h3>
        </Link>
        {author && (
          <Link to={`/profile/${userId}`} className="recipe-author-link">
            <p className="recipe-author">{author}</p>
          </Link>
        )}
      </div>
    </div>
  );
};

RecipeCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  author: PropTypes.string,
  id: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired
};

export default RecipeCard;
