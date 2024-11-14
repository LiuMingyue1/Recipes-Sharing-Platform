import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from "../components/navbar";
import users from '../assets/constants/mockUser.json'; 
import recipes from '../assets/constants/mockRecipe.json';
import RecipeCard from "../components/recipeCard"; // 引入 RecipeCard
import "../style/profile.css";

const Profile = () => {
  const { userId } = useParams();
  const user = users.find(user => user.id === parseInt(userId));
  const [viewMode, setViewMode] = useState('publish'); // 控制显示 published 或 liked recipes

  if (!user) {
    return <div>User not found</div>;
  }

  // 根据 viewMode 过滤食谱
  const filteredRecipes = viewMode === 'publish'
    ? recipes.filter(recipe => user.publishedRecipes.includes(recipe.id))
    : recipes.filter(recipe => user.likedRecipes.includes(recipe.id));

  return (
    <div className="profile-container-custom">
      <Navbar currentPageLink={`/profile/${userId}`} />
      
      <div className="profile-card-custom">
        <img src={user.avatar} alt={user.name} className="profile-avatar-custom" />
        <h2 className="profile-name-custom">{user.name}</h2>
        
        <div className="profile-info-group-custom">
          <div className="profile-info-item-custom">
            <span>ID:</span> {user.id}
          </div>
          <div className="profile-info-item-custom">
            <span>Age:</span> {user.age}
          </div>
        </div>
        <div className="profile-info-group-custom">
          <div className="profile-info-item-custom">
            <span>Email:</span> {user.email}
          </div>
        </div>
      </div>

      <div className="profile-recipe-section">
        <div className="button-group-custom">
          <button 
            className={`toggle-button-custom ${viewMode === 'publish' ? 'active' : ''}`} 
            onClick={() => setViewMode('publish')}
          >
            Published Recipes
          </button>
          <button 
            className={`toggle-button-custom ${viewMode === 'like' ? 'active' : ''}`} 
            onClick={() => setViewMode('like')}
          >
            Liked Recipes
          </button>
        </div>
        <div className="profile-recipe-list-custom">
          {filteredRecipes.map(recipe => (
            <RecipeCard 
              key={recipe.id}
              id={recipe.id}
              image={recipe.image}
              name={recipe.name}
              author={''} // 不显示作者
              userId={recipe.userId}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
