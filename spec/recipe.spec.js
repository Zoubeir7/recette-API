import { Recipe } from "../src/models/Recipe.js";

describe("Recipe Model Tests", () => {
  let recipeId = 23;

  it("can create a recipe", async () => {
    const recipe = {
      title: "domoda",
      type: "plat Entier",
      ingredient: "sel,eau, ll"
    };

    recipeId = await Recipe.createRecipe(
      recipe.title,
      recipe.ingredient,
      recipe.type

    );
    const recipeCreated = await Recipe.getRecipes();
    const createdRecipe = recipeCreated.find(r => r.id === recipeId);

    expect(recipeId).not.toBeNull();
    expect(createdRecipe).not.toBeUndefined();
    expect(createdRecipe.title).toBe(recipe.title);
    expect(createdRecipe.type).toBe(recipe.type);
    expect(createdRecipe.ingredient).toBe(recipe.ingredient);
  });

  it("can retrieve all recipes", async () => {
    const allRecipes = await Recipe.getRecipes();

    expect(allRecipes).not.toBeNull();
    expect(Array.isArray(allRecipes)).toBe(true);
  });

  it("can update a recipe", async () => {
    const updatedRecipe = {
      title: "Updated Mafé",
      type: "Main",
      ingredient: "sel, eau, riz",
    };

    const result = await Recipe.updateRecipe(
      recipeId,
      updatedRecipe.title,
      updatedRecipe.type,
      updatedRecipe.ingredient
    );
    const updatedRecipeFromDb = await Recipe.getRecipes();

    const updatedRecipeObj = updatedRecipeFromDb.find(r => r.id === recipeId);

    expect(result).toBe(true);
    expect(updatedRecipeObj.title).toBe(updatedRecipe.title);
    expect(updatedRecipeObj.type).toBe(updatedRecipe.type);
    expect(updatedRecipeObj.ingredient).toBe(updatedRecipe.ingredient);
  });

  it("can delete a recipe", async () => {
    const result = await Recipe.destroyRecipe(recipeId);
    const recipesAfterDeletion = await Recipe.getRecipes();

    const recipeAfterDeletion = recipesAfterDeletion.find(r => r.id === recipeId);

    expect(result).toBe(true);
    expect(recipeAfterDeletion).toBeUndefined();
  });
});
