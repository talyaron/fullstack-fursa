const mongoose = require('mongoose');

const mediaSchema= new mongoose.Schema({
    src:String,
    type:String
})

export default mediaSchema