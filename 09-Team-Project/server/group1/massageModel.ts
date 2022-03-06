const mongoose = require('mongoose');

const massageInfo = new mongoose.Schema({
    date:Date,
    from:String,//User||organization
    to:String, ////User||organization
    contentType:String, //vedio, string, image, voice
})

const massage = mongoose.model('massage', massageInfo);

export default massage;