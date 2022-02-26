import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
   name:String,
   country:String,
   stars:Number,
   images:[]

})

export default mongoose.model('hotels' , hotelSchema);