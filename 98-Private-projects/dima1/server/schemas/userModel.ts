const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone: String,
    description: String
})

const User = mongoose.model('User', userModel);

export default User;