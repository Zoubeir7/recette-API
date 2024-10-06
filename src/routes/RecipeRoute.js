import express from 'express';
import { RecipeController } from '../controllers/RecipeController.js';
import { addRequestValidator, updateRequestValidator, deleteRequestValidator, } from '../Validator/RecipeValidator.js';

const router = express.Router();

router.get('/recipes', RecipeController.getAllRecipes);

router.get('/recipes/:id', RecipeController.getByID);

router.post('/recipes', addRequestValidator, RecipeController.createRecipe);

router.delete(
  '/recipes/:id',
  deleteRequestValidator,
  RecipeController.deleteRecipe,
);

router.put(
  '/recipes/:id',
  updateRequestValidator,
  RecipeController.updateRecipe,
);

export { router };
