import { Recipe } from "../models/Recipe.js";

class RecipeController {
    static async getByID(req, res, next) {
        try {
            const id = req.params.id;
            const result = await Recipe.getRecipeById(id);
            res.json(result);
        } catch (e) {
            console.log(e.message);
        }
        next();
    }
    static async getAllRecipes(_req, res, next) {
        try {
            const result = await Recipe.getRecipes();
            res.json(result);
        } catch (e) {
            console.log(e.message);
        }
        next();
    }

    static async createRecipe(req, res, next) {
        try {
            const title = req.body.title;
            const ingredients = req.body.ingredients;
            const type = req.body.type;
            await Recipe.createRecipe(title, ingredients, type);
            res.json("Added successfully");
        } catch (e) {
            console.log(e.message);
        }
        next();
    }

    static async deleteRecipe(req, res, next) {
        try {
            const id = req.params.id;
            await Recipe.destroyRecipe(id);
            res.json("Deleted successfully");
        } catch (e) {
            console.log(e.message);
        }
        next();
    }

    static async updateRecipe(req, res, next) {
        try {
            const id = req.params.id;
            const title = req.body.titre;
            const ingredients = req.body.ingredients;
            const type = req.body.type;
            await Recipe.updateRecipe(id, title, ingredients, type);
            res.json("Updted successfully");
        } catch (e) {
            console.log(error.message);
        }
        next();
    }
}

export { RecipeController };
