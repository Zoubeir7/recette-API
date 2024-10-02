CREATE DATABASE recipe_management;
USE recipe_management;

CREATE TABLE recipes (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title VARCHAR(10) NOT NULL,
    type VARCHAR(100) NOT NULL,
    ingredients TEXT NOT NULL
);


