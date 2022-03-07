const mongoose = require("mongoose");
import Messages, { MessageSchema } from './messageModel'
import { UserSchema } from './userModel';



const SharingSchema = new mongoose.Schema({
    from: UserSchema,
    messages: { type: Array, "default": [MessageSchema] },// got accident Id inside
    content: String,
    to: String, //destination could be email ....
    chatId: String,
    date: Date,

});



const Sharing = mongoose.model("SharingSchema", SharingSchema);

export default Sharing
