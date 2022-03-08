const mongoose = require("mongoose");
import { AccidentSchema } from './accidentModel';
import { MessageSchema } from './messageModel'
import { UserSchema } from './userModel';



const SharingSchema = new mongoose.Schema({
    from: UserSchema,
    content: String,
    to: String, //destination could be email ....
    chatId: String,
    date: Date,
    accident:AccidentSchema

});



const Sharing = mongoose.model("SharingSchema", SharingSchema);

export default Sharing
