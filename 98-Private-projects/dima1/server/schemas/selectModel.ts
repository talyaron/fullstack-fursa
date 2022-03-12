const mongoose = require('mongoose');

//Select recipe schema
const selectRecipe = new mongoose.Schema({
    _id: Object,
    name: String,
    image: String,
    time: String,
    people: String,
    calories: String,
    ingredients: String,
    method: String,
    userName: String
})

//select collection
const Select = mongoose.model('recipes', selectRecipe);

export default Select;