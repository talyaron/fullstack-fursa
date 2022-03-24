
const mongoose = require("mongoose");

export const chatRoomSchema = new mongoose.Schema({
    user1:String,
    user2:String
        });



const chatRoom = mongoose.model("chatRooms", chatRoomSchema);

export default chatRoom
