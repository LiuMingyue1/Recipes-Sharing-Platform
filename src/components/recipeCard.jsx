import React from 'react';
import PropTypes from 'prop-types';
import '../style/recipeCard.css'; 

const RecipeCard = ({ image, name, author }) => {
  return (
    <div className="recipe-card">
      <img src={image} alt={name} className="recipe-image" />
      <div className="recipe-details">
        <h3 className="recipe-name">{name}</h3>
        <p className="recipe-author">{author}</p>
      </div>
    </div>
  );
};

RecipeCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export default RecipeCard;
