import mongoose from "mongoose";

const flightSchema = new mongoose.Schema({
  name: String,
  imgUrl: String,
  from: String,
  to: String,
});
export default mongoose.model("flights", flightSchema);


