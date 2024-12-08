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
  console.log("GET /api/recipes was called");
  try {
    const [recipes] = await db.query('SELECT * FROM recipes');
    res.json(recipes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/recipes/test', (req, res) => {
  console.log("Test route matched");
  res.json({ message: 'Test route works!' });
});

// 搜索 API
router.get('/recipes/search', async (req, res) => {
  console.log("Search API hit with query:", req.query.query); 
  const query = req.query.query || "";

  try {
    const [results] = await db.query(
      `SELECT DISTINCT recipes.* 
       FROM recipes 
       LEFT JOIN recipe_Ingredients ON recipes.recipeID = recipe_Ingredients.recipeID 
       LEFT JOIN ingredients ON recipe_Ingredients.ingredientID = ingredients.ingredientID 
       WHERE recipes.name LIKE ? OR ingredients.name LIKE ?`,
      [`%${query}%`, `%${query}%`]
    );

    res.json(results);
  } catch (error) {
    console.error("Error searching recipes:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Get a recipe with ingredients and steps
router.get('/recipes/:id/details', async (req, res) => {
  try {
    const recipeId = req.params.id;

    // 获取食谱信息
    const [recipe] = await db.query('SELECT * FROM recipes WHERE recipeID = ?', [recipeId]);
    if (recipe.length === 0) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    // 获取原料信息
    const [ingredients] = await db.query(
      `SELECT i.name, ri.quantity, ri.unit, ri.methods, ri.optional
       FROM recipe_Ingredients ri
       JOIN ingredients i ON ri.ingredientID = i.ingredientID
       WHERE ri.recipeID = ?`,
      [recipeId]
    );

    // 将数据返回
    res.json({
      ...recipe[0],
      ingredients: ingredients.map((item) => ({
        name: item.name,
        quantity: item.quantity,
        unit: item.unit,
        methods: item.methods,
        optional: item.optional === 1,
      })),
    });
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

// Check like status
router.get('/recipes/:id/like-status', auth, async (req, res) => {
  const recipeId = req.params.id;
  const userId = req.userId;
  console.log("Checking like status for recipeID:", recipeId, "and userID:", userId);


  try {
    const [likeStatus] = await db.query('SELECT * FROM likes WHERE recipeID = ? AND userID = ?', [recipeId, userId]);
    res.json({ liked: likeStatus.length > 0 });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get ingredients for a specific recipe
router.get('/recipes/:id/ingredients', async (req, res) => {
  const recipeId = req.params.id;

  try {
    const [ingredients] = await db.query(
      `SELECT i.name, ri.quantity, ri.unit, ri.optional, ri.methods 
       FROM recipe_Ingredients ri 
       JOIN ingredients i ON ri.ingredientID = i.ingredientID 
       WHERE ri.recipeID = ?`, 
      [recipeId]
    );
    res.json(ingredients);
  } catch (error) {
    console.error("Error fetching ingredients:", error);
    res.status(500).json({ message: "Internal server error" });
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


export default router;
