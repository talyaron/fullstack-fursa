const mongoose = require('mongoose');

const userRecipe = new mongoose.Schema({
    name: String,
    image: String,
    time: String,
    people: String,
    calories: String,
    ingredients: String,
    method: String,
    userName: String
})

const userRecipes = mongoose.model('recipes', userRecipe);

export default userRecipes;

