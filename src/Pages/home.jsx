import Text from "../components/text";
import AllLink from "../components/link";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import RecipeCard from '../components/recipeCard';
import "../style/homepage.css";
import recipes from '../assets/constants/mockRecipe.json'; 



const Home = () => {
  return (
    <div className="home-wrapper">
      <Navbar currentPageLink="/home" />
      
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
              key={recipe.id} 
              image={recipe.image} 
              name={recipe.name} 
              author={recipe.author} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};
  
  export default Home;