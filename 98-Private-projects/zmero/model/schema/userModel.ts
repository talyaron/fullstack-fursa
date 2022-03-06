const mongoose = require("mongoose");

const UsersSchema = mongoose.Schema({
    fName: String,
    lName: String,
    email: String,
    password: String,
    phone: String,
    region: String,
});

const Users = mongoose.model('users', UsersSchema);
export default Users