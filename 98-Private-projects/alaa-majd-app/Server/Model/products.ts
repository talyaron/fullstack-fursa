const mongoose = require('mongoose');


const ProductSchema = mongoose.Schema({
    "id": String,
    "name": String,
    "price": Number,
    "catagory": String,
    "quantity": Number,
    "amount": Number,
    "description": String,
    "Url": String
}) 

module.exports = mongoose.model('Products',ProductSchema);