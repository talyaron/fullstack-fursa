const mongoose = require("mongoose");

const RelatedProductSchema=new mongoose.Schema({
    name:String,
    price:Number,
    type:String,
    amount:Number
    });

const RelatedProduct=mongoose.model('RelatedProduct',RelatedProductSchema);

export default RelatedProduct;