import express from "express";
import { RecipeController } from "../controllers/RecipeController.js";

const router = express.Router();

router.get("/recipes", RecipeController.getAllRecipes);

router.get('/recipes/:id', RecipeController.getByID);

router.post("/recipes", RecipeController.createRecipe);

router.delete("/recipes/:id", RecipeController.deleteRecipe);

router.put("/recipes/:id", RecipeController.updateRecipe);


export { router };
