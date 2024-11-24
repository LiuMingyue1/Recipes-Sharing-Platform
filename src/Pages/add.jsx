import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/addpage.css";
import Navbar from "../components/navbar";
import imagePlaceholder from '../assets/addpic.svg';

const Add = () => {
  const [recipeName, setRecipeName] = useState("");
  const [Content, setContent] = useState("");
  const [ingredients, setIngredients] = useState([{ name: '', optional: false, unit: '', quantity: '', method: '' }]);

  const handleAddRecipe = () => {
    console.log("Recipe Added:", { recipeName, Content });
  };

  const handleAddImage = () => {
    console.log("Add Image Clicked");
  };

  const handleAddIngredient = () => {
    setIngredients([...ingredients, { name: '', optional: false, unit: '', quantity: '', method: '' }]);
  };

  const handleIngredientChange = (index, field, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index][field] = value;
    setIngredients(newIngredients);
  };

  return (
    <div className="add-page">
      <Navbar currentPageLink="/add" />

      <div className="add-content">
        <div className="add-pic" onClick={handleAddImage}>
        <button className="button">
            <img src={imagePlaceholder} alt="Add Placeholder" className="placeholder-image" />
          </button>
        </div>
        <div className="recipe-table">
            <table>
              <thead>
                <tr>
                  <th>Ingredients</th>
                  <th>Optional</th>
                  <th>Unit</th>
                  <th>Quantity</th>
                  <th>Method</th>
                </tr>
              </thead>
              <tbody>
                {ingredients.map((ingredient, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        type="text"
                        value={ingredient.name}
                        onChange={(e) => handleIngredientChange(index, 'name', e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        checked={ingredient.optional}
                        onChange={(e) => handleIngredientChange(index, 'optional', e.target.checked)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={ingredient.unit}
                        onChange={(e) => handleIngredientChange(index, 'unit', e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={ingredient.quantity}
                        onChange={(e) => handleIngredientChange(index, 'quantity', e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={ingredient.method}
                        onChange={(e) => handleIngredientChange(index, 'method', e.target.value)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={handleAddIngredient} className="add-ingredient-button">
              Add Ingredient
            </button>
          </div>
      </div>
        <div className="form-group">
          <button className="button">
            Appetizers
          </button>
          <button className="button">
            Main Courses
          </button>
          <button className="button">
            Desserts
          </button>
          <button className="button">
            Beverages
          </button>
          <label htmlFor="recipeName">Recipe Name:</label>
          <input
            type="text"
            id="recipeName"
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
            placeholder="Enter the text..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="Content">Content:</label>
          <textarea
            id="Content"
            value={Content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter the text..."
          />
        </div>
        <Link to="/detail" className="add-button" onClick={handleAddRecipe}>
        Complete
      </Link>

    </div>
  );
};

export default Add;