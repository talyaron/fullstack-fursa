const mongoose = require('mongoose');

const recipeInfo = new mongoose.Schema({
    name: String,
    image: String,
    time: String,
    people: String,
    calories: String,
    ingredients: String,
    method: String
})


const top10 = mongoose.model('Top10', recipeInfo);
const recent = mongoose.model('Recent Recipes', recipeInfo);
const userRecipes = mongoose.model('My Recipes', recipeInfo);

export default top10; recent; userRecipes;

