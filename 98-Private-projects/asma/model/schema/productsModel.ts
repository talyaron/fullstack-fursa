import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: String,
    text: String,
    img: String
  });



const Product = mongoose.model('products', productSchema);

export default Product;