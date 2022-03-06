const mongoose = require("mongoose");

const RawSchema=new mongoose.Schema({
    name:String,
    imageUrl:String,
    pricePerMeter:Number,
    
    });

const Raw=mongoose.model('Raw',RawSchema);

export default Raw;
