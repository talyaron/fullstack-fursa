
const mongoose = require("mongoose");

export const chatRoomSchema = new mongoose.Schema({
    chatRoomId: String,
    user1:String,
    user2:String
});



const chatRoom = mongoose.model("chatRoom", chatRoomSchema);

export default chatRoom
