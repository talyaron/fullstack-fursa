
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    phone: String,
    city: String,
});



const Users = mongoose.model("Users", userSchema);

export default Users
