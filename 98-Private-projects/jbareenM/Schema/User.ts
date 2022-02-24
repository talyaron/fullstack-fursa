export {}
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { type: String, sparse: true },
  password: String,
  active: { type: Boolean, default: true }
});

const User = mongoose.model("users", UserSchema);
module.exports = User;