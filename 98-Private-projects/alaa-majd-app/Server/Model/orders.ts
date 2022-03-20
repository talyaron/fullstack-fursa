const mongoose = require('mongoose');
import { ProductSchema } from './products';

const OrderSchema = mongoose.Schema({
    "Id": String,
    "OwnerId": String,
    "groupId": String,
    "cartProducts": [ProductSchema]
}) 

module.exports = mongoose.model('Orders',OrderSchema);
