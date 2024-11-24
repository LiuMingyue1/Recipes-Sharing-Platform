import express from 'express';
import db from '../db.js'; // Database connection
import multer from 'multer';
import auth from '../middlewares/auth.js'; // Authentication middleware

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// Create a new recipe
router.post('/recipes', auth, upload.single('image'), async (req, res) => {
  const { title, ingredients, steps } = req.body;
  const imagePath = req.file ? req.file.path : null;

  try {
    const [result] = await db.query(
      'INSERT INTO recipes (recipeID, pictureID, userID, name, content) VALUES (?, ?, ?, ?, ?)',
      [Date.now().toString(), imagePath, req.userId, title, steps]
    );
    res.status(201).json({ recipeID: result.insertId, title, ingredients, steps, pictureID: imagePath });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get all recipes
router.get('/recipes', async (req, res) => {
  try {
    const [recipes] = await db.query('SELECT * FROM recipes');
    res.json(recipes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get a specific recipe
router.get('/recipes/:id', async (req, res) => {
  try {
    const [recipes] = await db.query('SELECT * FROM recipes WHERE recipeID = ?', [req.params.id]);
    if (recipes.length === 0) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.json(recipes[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Update a recipe
router.put('/recipes/:id', auth, async (req, res) => {
  const { title, ingredients, steps } = req.body;

  try {
    const [recipes] = await db.query('SELECT * FROM recipes WHERE recipeID = ?', [req.params.id]);
    if (recipes.length === 0) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    if (recipes[0].userID !== req.userId) {
      return res.status(403).json({ message: 'Permission denied' });
    }

    await db.query('UPDATE recipes SET name = ?, content = ? WHERE recipeID = ?', [title, steps, req.params.id]);
    res.json({ recipeID: req.params.id, title, ingredients, steps });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Delete a recipe
router.delete('/recipes/:id', auth, async (req, res) => {
  try {
    const [recipes] = await db.query('SELECT * FROM recipes WHERE recipeID = ?', [req.params.id]);
    if (recipes.length === 0) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    if (recipes[0].userID !== req.userId) {
      return res.status(403).json({ message: 'Permission denied' });
    }

    await db.query('DELETE FROM recipes WHERE recipeID = ?', [req.params.id]);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get a random recipe
router.get('/recipes/random', async (req, res) => {
  try {
    const [recipes] = await db.query('SELECT * FROM recipes');
    if (recipes.length === 0) {
      return res.status(404).json({ message: 'No recipes available' });
    }
    const randomIndex = Math.floor(Math.random() * recipes.length);
    console.log('Random Index:', randomIndex); 
    console.log('Recipes Length:', recipes.length); 
    res.json(recipes[randomIndex]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
