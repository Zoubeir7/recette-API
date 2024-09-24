/* creation & utilisation de bd */
CREATE DATABASE recipe_management;
USE recipe_management;

/* creation de la table recette */
CREATE TABLE recipes (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title VARCHAR(100) NOT NULL,
    type VARCHAR(50) NOT NULL,
    ingredient TEXT NOT NULL
);
