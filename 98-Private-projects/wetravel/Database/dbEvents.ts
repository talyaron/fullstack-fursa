import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  from: String,
  to: String,
  imgUrl: String,
  likes:Number
});

export default mongoose.model("events", eventSchema);
