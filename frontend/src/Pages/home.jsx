import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import RecipeCard from "../components/recipeCard";
import "../style/homepage.css";
import axios from "axios";

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/recipes");
      if (Array.isArray(response.data)) {
        setRecipes(response.data);
      } else {
        console.error("Unexpected data format:", response.data);
        setRecipes([]);
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setRecipes([]);
    }
  };

  const handleSearch = async (query) => {
    if (query.trim() === "") {
      // 如果搜索关键字为空，加载所有菜谱
      fetchRecipes();
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:5000/api/recipes/search?query=${query}`
      );
      if (Array.isArray(response.data)) {
        setRecipes(response.data); // 更新搜索结果
      } else {
        setRecipes([]);
      }
    } catch (error) {
      console.error("Error searching recipes:", error);
      setRecipes([]);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div className="home-wrapper">
      <div className="homenavbar">
        <Navbar currentPageLink="/home" onSearch={handleSearch} />
      </div>

      <div className="category-navigation">
        <button className="category-button">Appetizers</button>
        <button className="category-button">Main Courses</button>
        <button className="category-button">Desserts</button>
        <button className="category-button">Beverages</button>
      </div>

      <div className="home-container">
        <div className="recipe-list">
          {recipes.map((recipe) => (
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
