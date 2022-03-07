
import UserSchema from "./userModel";
import MediaSchema from './mediaSchema';
const mongoose = require("mongoose");


const accidentSchema = new mongoose.Schema({

    type: String,
    emergency : Boolean || null,
    date: String,
    address:Location,
    media: [MediaSchema],
    call: Object,
    description: String,
    user: UserSchema,
})
const accident = mongoose.model("accident",accidentSchema);
export default accidentSchema;


