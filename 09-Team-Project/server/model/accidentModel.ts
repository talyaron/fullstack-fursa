
const mongoose = require("mongoose");

const accidentSchema = new mongoose.Schema({
    type: String,
    userId: String,
    date: Date,
    family: Boolean,
    chatId: String,
});



const Accidents = mongoose.model("Accidents", accidentSchema);

export default Accidents
