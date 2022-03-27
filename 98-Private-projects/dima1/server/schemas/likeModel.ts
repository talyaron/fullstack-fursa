const mongoose = require('mongoose');

const like = new mongoose.Schema({
    recipeId : String,
    users: Array
})

const likeModel = mongoose.model('likes', like);

export default likeModel;

