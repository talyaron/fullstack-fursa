import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    name: String,
    img: String,
  });


const Category = mongoose.model('categories', categorySchema);

export default Category;