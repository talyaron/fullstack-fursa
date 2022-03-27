const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  typeId: String,
  url: String,
  price: Number,
  description: String,
  quantity: Number,
 
});

//the collection
const Products = mongoose.model("Products", productSchema);

export default Products;
