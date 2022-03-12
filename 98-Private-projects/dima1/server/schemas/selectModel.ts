const mongoose = require('mongoose');

//Select recipe schema
const selectRecipe = new mongoose.Schema({
    info: {
        _id: Object,
        name: String,
        image: String,
        time: String,
        people: String,
        calories: String,
        ingredients: String,
        method: String,
        userName: String
    },
    from: String,
    isNew_: Boolean
})

//select collection
const Select = mongoose.model('select recipe', selectRecipe);

export default Select;