const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    id:String,
    password: String,
   
})
const users = mongoose.model("users",UserSchema);
export default users;