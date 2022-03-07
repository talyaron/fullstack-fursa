export {}
const mongoose = require("mongoose");

const userSchema=new mongoose.Schema({
    userID:Number,
    name:String,
    email:String,
    password:String,
    phone:String,
    location:String,
    gender:String,
    type:String

})

const Users = mongoose.model("Users", userSchema);

export default Users