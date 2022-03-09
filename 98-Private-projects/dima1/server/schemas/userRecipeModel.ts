const mongoose = require('mongoose');

const userRecipe = new mongoose.Schema({
    name: String,
    image: String,
    time: String,
    people: String,
    calories: String,
    ingredients: String,
    method: String
})

const userRecipes = mongoose.model('My Recipes', userRecipe);

export default userRecipes;

