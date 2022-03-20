const mongoose = require("mongoose");

const productSchema=new mongoose.Schema({
    name:String,
    imgurl:String,
   
    
    });

const Product=mongoose.model('Product',productSchema);

export default Product;