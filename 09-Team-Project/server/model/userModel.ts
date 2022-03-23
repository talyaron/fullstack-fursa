import { OrgSchema } from "./orgModel";

const mongoose = require("mongoose");

export const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone: String,
    location: String,
    gender: String,
    type: { type: String, enum: ['admin', 'org', 'public', 'anonymous'], default: 'public' },
    org: OrgSchema

})

const Users = mongoose.model("users", UserSchema);

export default Users