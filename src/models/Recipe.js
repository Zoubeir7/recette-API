import { pool } from '../config/db.js';

class Recipe {
  static async getRecipeById(id) {
    const connection = await pool.getConnection();
    try {
      const [result] = await connection.execute(
        'SELECT * FROM recipes WHERE id = ?',
        [id],
      );
      return result.length > 0 ? result[0] : null;
    } finally {
      connection.release();
    }
  }

  static async getRecipes() {
    const connection = await pool.getConnection();
    try {
      const [result] = await connection.execute('SELECT * FROM recipes');
      return result;
    } finally {
      connection.release();
    }
  }

  static async createRecipe(title, type, ingredient) {
    const connection = await pool.getConnection();
    try {
      const [result] = await connection.execute(
        'INSERT INTO recipes (title, type, ingredient) VALUES (?, ?, ?)',
        [title, ingredient, type]
      );
      return result.insertId;
    } finally {
      connection.release();
    }
  }


  static async updateRecipe(id, title, ingredient, type) {
    const connection = await pool.getConnection();
    try {
      await connection.execute(
        'UPDATE recipes SET title = ?, type = ?, ingredient = ? WHERE id = ?',
        [title, ingredient, type, id],
      );
      return true;
    } finally {
      connection.release();
    }
  }

  static async destroyRecipe(id) {
    const connection = await pool.getConnection();
    try {
      await connection.execute('DELETE FROM recipes WHERE id = ?', [id]);
      return true;
    } finally {
      connection.release();
    }
  }

  static async checkRecipe(title) {
    const connection = await pool.getConnection();
    try {
      const [result] = await connection.execute(
        'SELECT COUNT(*) as count FROM recipes WHERE title = ?',
        [title],
      );
      return result[0].count;
    } finally {
      connection.release();
    }
  }

  static async existsById(id) {
    const connection = await pool.getConnection();
    try {
      const [result] = await connection.execute(
        'SELECT COUNT(*) as count FROM recipes WHERE id = ?',
        [id],
      );
      return result[0].count;
    } finally {
      connection.release();
    }
  }
}

export { Recipe };
