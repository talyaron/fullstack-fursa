const mongoose = require('mongoose');

const emergencyInfo = new mongoose.Schema({
    media:String, //image, vedio
    location:String,
    chatId:String
})

const emergency = mongoose.model('emergency', emergencyInfo);

export default emergency;