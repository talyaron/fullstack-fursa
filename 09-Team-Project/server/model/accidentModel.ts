
import userSchema from "./userModel";
const mongoose = require("mongoose");
const accidentSchema = new mongoose.Schema({
    accidentId:Number,
    accidentType: String,
    emergency : String || null,
    accidentDate: String,
    accidentAddress:Location,
    accidentPic: String,
    accidentVideo:String,
    voiceCall: Object,
    accidentDescription: String,
    accidentUser: userSchema,
})
const accident = mongoose.model("accident",accidentSchema);
export default accidentSchema;


