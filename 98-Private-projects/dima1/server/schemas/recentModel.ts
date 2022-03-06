const mongoose = require('mongoose');

const recentInfo = new mongoose.Schema({
    name: String,
    image: String,
    time: String,
    people: String,
    calories: String,
    ingredients: String,
    method: String
})

const recent = mongoose.model('Recent Recipes', recentInfo);

export default recent;