import { RecipeModel } from '../models/RecipeModel.js';

class RecipeController {
  static async getByID(req, res, next) {
    try {
      const id = req.params.id;
      const result = await RecipeModel.getRecipeById(id);
      res.json(result);
    } catch (e) {
      console.log(e.message);
    }
    next();
  }
  static async getAllRecipes(_req, res, next) {
    try {
      const result = await RecipeModel.getRecipes();
      res.json(result);
    } catch (e) {
      console.log(e.message);
    }
    next();
  }

  static async createRecipe(req, res, next) {
    try {
      const title = req.body.title;
      const type = req.body.type;
      const ingredients = req.body.ingredients;
      await RecipeModel.createRecipe(title, ingredients, type);
      res.json('Added successfully');
    } catch (e) {
      console.log(e.message);
    }
    next();
  }

  static async deleteRecipe(req, res, next) {
    try {
      const id = req.params.id;
      await RecipeModel.destroyRecipe(id);
      res.json('Deleted successfully');
    } catch (e) {
      console.log(e.message);
    }
    next();
  }

  static async updateRecipe(req, res, next) {
    try {
      const id = req.params.id;
      const title = req.body.title;
      const type = req.body.type;
      const ingredients = req.body.ingredients;
      await RecipeModel.updateRecipe(id, title, ingredients, type);
      res.json('Updted successfully');
    } catch (e) {
      console.log(e.message);
    }
    next();
  }
}

export { RecipeController };
