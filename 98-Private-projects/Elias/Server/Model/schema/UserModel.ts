const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    FName: String,
    Lname: String,
    UserName: String,
    Password: String,
    Email:String,
    id: String,
});

//the collection
const Users = mongoose.model("User", UserSchema);

export default Users;
