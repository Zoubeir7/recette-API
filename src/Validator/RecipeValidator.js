import { check, param, validationResult } from 'express-validator';
import { StatusCodes } from 'http-status-codes';
import { RecipeModel } from '../models/RecipeModel.js';

const addRequestValidator = [
  check('title')
    .notEmpty()
    .withMessage('Titre ne peut pas être vide!')
    .bail()
    .isLength({ min: 5, max: 100 })
    .withMessage('Le titre doit contenir entre 5 et 100 caractères!')
    .bail()
    .custom(async (value) => {
      const count = await RecipeModel.checkRecipe(value);
      if (count > 0) {
        throw new Error('Cette recette existe déjà!');
      }
      return true;
    }),
  check('type')
    .notEmpty()
    .withMessage('Type ne peut pas être vide!')
    .bail()
    .isIn(['entrée', 'plat', 'dessert'])
    .withMessage(
      'Type doit être l’une des valeurs suivantes : entrée, plat, dessert!',
    )
    .bail(),
  check('ingredients')
    .notEmpty()
    .withMessage('Ingrédients ne peuvent pas être vides!')
    .bail()
    .isLength({ min: 10, max: 500 })
    .withMessage('Les ingrédients doivent contenir entre 10 et 500 caractères!')
    .bail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res
        .status(StatusCodes.UNPROCESSABLE_ENTITY)
        .json({ errors: errors.array() });
    next();
  },
];

const deleteRequestValidator = [
  param('id')
    .notEmpty()
    .withMessage('Id est obligatoire!')
    .bail()
    .custom(async (value) => {
      const count = await RecipeModel.existsById(value);
      if (count === 0) {
        throw new Error("Cette recette n'existe pas!");
      }
      return true;
    }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res
        .status(StatusCodes.UNPROCESSABLE_ENTITY)
        .json({ errors: errors.array() });
    next();
  },
];

const updateRequestValidator = [
  param('id')
    .notEmpty()
    .withMessage('Id est requis!')
    .bail()
    .custom(async (value) => {
      const count = await RecipeModel.existsById(value);
      if (count === 0) {
        throw new Error("Cette recette n'existe pas!");
      }
      return true;
    }),
  check('title')
    .notEmpty()
    .withMessage('Titre ne peut pas être vide!')
    .bail()
    .isLength({ min: 5, max: 100 })
    .withMessage('Le titre doit contenir entre 5 et 100 caractères!')
    .bail()
    .custom(async (value) => {
      const count = await RecipeModel.checkRecipe(value);
      if (count > 0) {
        throw new Error('Cette recette existe déjà!');
      }
      return true;
    }),
  check('type')
    .notEmpty()
    .withMessage('Type ne peut pas être vide!')
    .bail()
    .isIn(['entrée', 'plat', 'dessert'])
    .withMessage(
      'Type doit être l’une des valeurs suivantes : entrée, plat, dessert!',
    )
    .bail(),
  check('ingredients')
    .notEmpty()
    .withMessage('Ingrédients ne peuvent pas être vides!')
    .bail()
    .isLength({ min: 10, max: 500 })
    .withMessage('Les ingrédients doivent contenir entre 10 et 500 caractères!')
    .bail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res
        .status(StatusCodes.UNPROCESSABLE_ENTITY)
        .json({ errors: errors.array() });
    next();
  },
];

export { addRequestValidator, deleteRequestValidator, updateRequestValidator };
