import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  imgUrl: String,
  country : String,
  followers:Number,
  events: []
});

export default mongoose.model('users' ,userSchema); 