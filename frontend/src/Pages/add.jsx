import React, { useState } from "react";
import Navbar from "../components/navbar";
import "../style/addpage.css";
import axios from "axios";

const Add = () => {
  const [recipeName, setRecipeName] = useState("");
  const [content, setContent] = useState("");
  const [ingredients, setIngredients] = useState([{ name: '', optional: false, unit: '', quantity: '', method: '' }]);
  const [image, setImage] = useState(null);

  const handleAddRecipe = async () => {
    try {
      const formData = new FormData();
      formData.append("name", recipeName);
      formData.append("content", content);
      formData.append("ingredients", JSON.stringify(ingredients));
      if (image) {
        formData.append("image", image);
      }

      await axios.post('/api/recipes', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert("Recipe added successfully!");
    } catch (error) {
      console.error("Error adding recipe:", error);
      alert("Failed to add recipe.");
    }
  };

  const handleAddIngredient = () => {
    setIngredients([...ingredients, { name: '', optional: false, unit: '', quantity: '', method: '' }]);
  };

  return (
    <div className="add-page">
      <Navbar currentPageLink="/add" />
      <div className="form-group">
        <label htmlFor="image">Upload Image:</label>
        <input
          type="file"
          id="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>
      <div className="form-group">
        <label htmlFor="recipeName">Recipe Name:</label>
        <input
          type="text"
          id="recipeName"
          value={recipeName}
          onChange={(e) => setRecipeName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleAddIngredient}>Add Ingredient</button>
      </div>
      <button onClick={handleAddRecipe}>Submit</button>
    </div>
  );
};

export default Add;
