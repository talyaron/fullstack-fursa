const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
    email: String,
    password: String
})

const User = mongoose.model('User', userModel);

export default User;