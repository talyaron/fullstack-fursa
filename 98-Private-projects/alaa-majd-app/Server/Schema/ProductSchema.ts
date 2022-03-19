const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    id:Number,
    name: String,
    price: Number,
    quantity: Number,
    description: String,
    Url: String,
})
const product = mongoose.model("products",productSchema);
export default productSchema;