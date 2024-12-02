import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Navbar from "../components/navbar";
import RecipeCard from "../components/recipeCard";
import axios from "axios";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [recipes, setRecipes] = useState([]);
  const [viewMode, setViewMode] = useState("publish");

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const endpoint =
          viewMode === "publish"
            ? `/api/users/${user.userId}/my-recipes`
            : `/api/users/${user.userId}/liked-recipes`;
        const response = await axios.get(endpoint);
        setRecipes(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchRecipes();
  }, [viewMode, user]);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <Navbar currentPageLink={`/profile/${user.userId}`} />
      <h1>Welcome, {user.name}</h1>
      <div>
        <button onClick={() => setViewMode("publish")}>Published Recipes</button>
        <button onClick={() => setViewMode("like")}>Liked Recipes</button>
      </div>
      <div>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.recipeID} {...recipe} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
