const mongoose = require('mongoose');
import { GroupSchema } from './groups';
import { OrderSchema } from './orders';

const UserSchema = mongoose.Schema({
    "id": String,
    "fullName": String,
    "address": String,
    "city": String,
    "Email": String,
    "phone": String,
    "password": String,
    "groups": [GroupSchema],
    "orders": [OrderSchema]
}) 

module.exports = mongoose.model('Users',UserSchema);
