
const mongoose = require("mongoose");


const orgUserSchema = new mongoose.Schema({
    email: String,
    password: String,
    phone: String,
    firstName: String,
    lastName: String,
});

const orgUsers = mongoose.model("OrgUser", orgUserSchema);

export default orgUsers



