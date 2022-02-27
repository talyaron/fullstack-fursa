import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    city:String,
    description:String,
    oldprice:String,
    newprice:String,
    img:String,
})


export default mongoose.model("books" , bookSchema);
