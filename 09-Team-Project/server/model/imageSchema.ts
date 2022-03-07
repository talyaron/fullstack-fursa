const mongoose = require('mongoose');

const ImageSchema= new mongoose.Schema({
    src:String
})

export default ImageSchema