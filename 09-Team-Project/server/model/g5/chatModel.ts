import Messages from '../messageModel'
const mongoose = require("mongoose");


const chatSchema = new mongoose.Schema({
    messages: { type: Array, "default": [Messages] },
    userID: String,
    //orgUserIds: { type: Array, "default": [String] },
});



const Chats = mongoose.model("Chats", chatSchema);

export default Chats
