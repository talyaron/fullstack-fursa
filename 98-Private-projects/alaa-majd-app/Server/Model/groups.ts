const mongoose = require('mongoose');
import { UserSchema } from './users';

const GroupSchema = mongoose.Schema({
    "Id": String,
    "Name": String,
    "adminId": String,
    "Members": [UserSchema]
}) 

module.exports = mongoose.model('Groups',GroupSchema);
