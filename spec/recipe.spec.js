import { Recipe } from "../src/models/Recipe.js";

describe("Recipe Model Tests", () => {
  let recipeId = 6;

  it("can create a recipe", async () => {
    const recipe = {
      title: "domoda",
      type: "entrée",
      ingredients: "sel,eau, ll"
    };

    recipeId = await Recipe.createRecipe(
      recipe.title,
      recipe.ingredients,
      recipe.type
    );

    const recipeCreated = await Recipe.getRecipes();
    const createdRecipe = recipeCreated.find(r => r.id === recipeId);

    expect(recipeId).not.toBeNull();
    expect(createdRecipe).not.toBeUndefined();
    expect(createdRecipe.title).toBe(recipe.title);
    expect(createdRecipe.type).toBe(recipe.type);
    expect(createdRecipe.ingredients).toBe(recipe.ingredients);
  });

  it("can retrieve all recipes", async () => {
    const allRecipes = await Recipe.getRecipes();

    expect(allRecipes).not.toBeNull();
    expect(Array.isArray(allRecipes)).toBe(true);
  });

  it("can update a recipe", async () => {
    const updatedRecipe = {
      title: "Updated",
      type: "plat",
      ingredients: "sel, eau, riz",
    };

    const result = await Recipe.updateRecipe(
      recipeId,
      updatedRecipe.title,
      updatedRecipe.type,
      updatedRecipe.ingredients
    );

    const updatedRecipeFromDb = await Recipe.getRecipes();
    const updatedRecipeObj = updatedRecipeFromDb.find(r => r.id === recipeId);

    expect(result).toBe(true);
    expect(updatedRecipeObj.title).toBe(updatedRecipe.title);
    expect(updatedRecipeObj.type).toBe(updatedRecipe.type);
    expect(updatedRecipeObj.ingredients).toBe(updatedRecipe.ingredients);
  });

  it("can delete a recipe", async () => {
    const result = await Recipe.destroyRecipe(recipeId);
    const recipesAfterDeletion = await Recipe.getRecipes();

    const recipeAfterDeletion = recipesAfterDeletion.find(r => r.id === recipeId);

    expect(result).toBe(true);
    expect(recipeAfterDeletion).toBeUndefined();
  });


  it("can check if a recipe exists by title", async () => {
    const count = await Recipe.checkRecipe("domoda");
    expect(count).toBeGreaterThan(0);
  });


});
