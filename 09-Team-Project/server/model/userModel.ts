import { OrgSchema } from "./orgModel";

const mongoose = require("mongoose");

export const UserSchema = new mongoose.Schema({
    userID: Number,
    name: String,
    email: String,
    password: String,
    phone: String,
    location: String,
    gender: String,
    type: { type: String, enum: ['admin', 'org', 'public'], default: 'public' },
    org: OrgSchema

})

const Users = mongoose.model("Users", UserSchema);

export default Users