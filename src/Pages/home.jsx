import Navbar from "../components/navbar";
import RecipeCard from '../components/recipeCard';
import "../style/homepage.css";
import recipes from '../assets/constants/mockRecipe.json'; 

const Home = () => {
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
              key={recipe.id}
              id={recipe.id} 
              image={recipe.image} 
              name={recipe.name} 
              author={recipe.author} 
              userId={recipe.userId}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
