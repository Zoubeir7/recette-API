CREATE DATABASE recipe_management;
USE recipe_management;

CREATE TABLE recipes (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title VARCHAR(10) NOT NULL,
    type VARCHAR(100) NOT NULL,
    ingredients TEXT NOT NULL
);


INSERT INTO recipes (title, type, ingredients)
VALUES 
('Tarte', 'dessert', 'Pâte, Pommes, Sucre, Beurre'),
('Lasagne', 'plat', 'Pâtes, Viande, Sauce tomate, Fromage'),
('Brownie', 'dessert', 'Chocolat, Beurre, Sucre, Farine, Oeufs'),
('Couscous', 'entrée', 'Semoule, Légumes, Viande, Épices'),
('Crêpe', 'dessert', 'Farine, Lait, Oeufs, Sucre, Beurre'),
('Ratatouille', 'plat', 'Courgettes, Aubergines, Tomates, Oignons, Poivrons');

