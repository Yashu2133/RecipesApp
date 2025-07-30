const express = require('express');
const {getAllrecipes, createRecipe, getRecipeById, updateRecipe, deleteRecipe} = require('../controllers/recipeController');

const recipeRouter = express.Router();
recipeRouter.get('/',getAllrecipes);
recipeRouter.get('/:id',getRecipeById);
recipeRouter.post('/', createRecipe);
recipeRouter.put('/:id',updateRecipe);
recipeRouter.delete('/:id',deleteRecipe);

module.exports = recipeRouter;