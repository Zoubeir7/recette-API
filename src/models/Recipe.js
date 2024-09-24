import { pool } from '../config/db.js';

class Recipe {
  // Récupérer une recette par son ID
  static async getRecipeById(id) {
    const connection = await pool.getConnection();
    try {
      const [result] = await connection.execute(
        'SELECT * FROM recipes WHERE id = ?',
        [id],
      );
      return result;
    } finally {
      connection.release();
    }
  }

  // Récupérer toutes les recettes
  static async getRecipes() {
    const connection = await pool.getConnection();
    try {
      const [result] = await connection.execute('SELECT * FROM recipes');
      return result;
    } finally {
      connection.release();
    }
  }

  // Créer une nouvelle recette
  static async createRecipe(title, type, ingredient) {
    const connection = await pool.getConnection();
    try {
      const [result] = await connection.execute(
        'INSERT INTO recipes (title, ingredient, type) VALUES (?, ?, ?)',
        [title, ingredient, type],
      );
      return result.insertId; // Retourne l'ID inséré
    } finally {
      connection.release();
    }
  }

  // Mettre à jour une recette par son ID
  static async updateRecipe(id, title, type, ingredient) {
    const connection = await pool.getConnection();
    try {
      await connection.execute(
        'UPDATE recipes SET title = ?, type = ?, ingredient = ? WHERE id = ?',
        [title, type, ingredient, id],
      );
      return true;
    } finally {
      connection.release();
    }
  }

  // Supprimer une recette par son ID
  static async destroyRecipe(id) {
    const connection = await pool.getConnection();
    try {
      await connection.execute('DELETE FROM recipes WHERE id = ?', [id]);
      return true;
    } finally {
      connection.release();
    }
  }
}

export { Recipe };
