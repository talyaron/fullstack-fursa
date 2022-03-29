const mongoose = require('mongoose');

const userRecipe = new mongoose.Schema({
    name: String,
    image: String,
    time: String,
    people: String,
    calories: String,
    ingredients: String,
    method: String,
    notes: String,
    userName: String,
    types: Array,
    date: String
})

const userRecipes = mongoose.model('Recipes', userRecipe);

export default userRecipes;

