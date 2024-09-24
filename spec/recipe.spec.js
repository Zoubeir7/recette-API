import { Recipe } from "../src/models/Recipe.js";

describe("Recipe Model Tests", () => {
  let recipeId = null;

  // Test de création d'une recette
  it("can create a recipe", async () => {
    const recipe = {
      title: "domoda",
      type: "plat Entier",
      ingredient: "sel, eau",
    };

    // Crée la recette et récupère son ID
    recipeId = await Recipe.createRecipe(
      recipe.title,
      recipe.type,
      recipe.ingredient,
    );
    const recipeCreated = await Recipe.getRecipeById(recipeId);

    expect(recipeId).not.toBeNull();
    expect(recipeCreated).not.toBeNull();
    expect(recipeCreated[0].title).toBe(recipe.title);
    expect(recipeCreated[0].type).toBe(recipe.type);
    expect(recipeCreated[0].ingredient).toBe(recipe.ingredient);
  });

  // Test de récupération de toutes les recettes
  it("can retrieve all recipes", async () => {
    const allRecipes = await Recipe.getRecipes();

    expect(allRecipes).not.toBeNull();
    expect(Array.isArray(allRecipes)).toBeTrue();
  });

  // Test de mise à jour d'une recette
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
      updatedRecipe.ingredient,
    );
    const updatedRecipeFromDb = await Recipe.getRecipeById(recipeId);

    expect(result).toBeTrue();
    expect(updatedRecipeFromDb[0].title).toBe(updatedRecipe.title);
    expect(updatedRecipeFromDb[0].type).toBe(updatedRecipe.type);
    expect(updatedRecipeFromDb[0].ingredient).toBe(updatedRecipe.ingredient);
  });

  // Test de suppression d'une recette
  it("can delete a recipe", async () => {
    const result = await Recipe.destroyRecipe(recipeId);
    const recipeAfterDeletion = await Recipe.getRecipeById(recipeId);

    expect(result).toBeTrue();
    expect(recipeAfterDeletion.length).toBe(0); // Supposons que cela renvoie un tableau vide si non trouvé
  });
});
