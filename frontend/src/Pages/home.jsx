import React, { useEffect, useState } from 'react';
import Navbar from "../components/navbar";
import RecipeCard from '../components/recipeCard';
import "../style/homepage.css";
import axios from 'axios';

const Home = () => {
  const [recipes, setRecipes] = useState([]); // 确保初始值为数组

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/recipes');
        if (Array.isArray(response.data)) {
          setRecipes(response.data); // 确保只设置数组
        } else {
          console.error("Unexpected data format:", response.data);
          setRecipes([]); // 设置为空数组
        }
      } catch (error) {
        console.error("Error fetching recipes:", error);
        setRecipes([]); // 错误时设置为空数组
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="home-wrapper">
      <div className="homenavbar">
        <Navbar currentPageLink="/home" />
      </div>
      
      <div className="category-navigation">
        <button className="category-button">Most Popular</button>
        <button className="category-button">Appetizers</button>
        <button className="category-button">Main Courses</button>
        <button className="category-button">Desserts</button>
        <button className="category-button">Beverages</button>
      </div>

      <div className="home-container">
        <div className="recipe-list">
          {recipes.map(recipe => (
            <RecipeCard 
              key={recipe.recipeID}
              id={recipe.recipeID}
              image={recipe.pictureID}
              name={recipe.name}
              author={recipe.author || "Unknown Author"}
              userId={recipe.userID}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

