const mongoose = require('mongoose');


const recipeSchema = new mongoose.Schema({
    title: String,
    ingredients: Array,
    instructions: String,

}, { timestamps: true });


module.exports = mongoose.model('Recipe',recipeSchema,'Recipes')