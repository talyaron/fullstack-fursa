
import userSchema from "./userModel";
import ImageSchema from './imageSchema';
const mongoose = require("mongoose");


const accidentSchema = new mongoose.Schema({

    type: String,
    emergency : Boolean || null,
    date: String,
    address:Location,
    pic: [],
    video:String,
    call: Object,
    description: String,
    user: userSchema,
})
const accident = mongoose.model("accident",accidentSchema);
export default accidentSchema;


