const mongoose = require("mongoose");




const SharingSchema = new mongoose.Schema({
  orgUserId:String,
  messages: { type: Array, "default": [Messages] },// got accident Id inside
  content: String,
  to: String, //destination could be email ....
  chatId: String,
  date:Date,


});



const Sharing = mongoose.model("SharingSchema", SharingSchema);

export default Sharing
