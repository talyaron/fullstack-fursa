const mongoose = require("mongoose");

const RawSchema=new mongoose.Schema({
    name:String,
    width:Number,
    thick:Number,
    lengths:[Number],
    imageUrl:String,
    pricePerMeter:Number,
    
    });

const Raw=mongoose.model('Raw',RawSchema);

export default Raw;