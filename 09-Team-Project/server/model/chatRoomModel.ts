
const mongoose = require("mongoose");

export const chatRoomSchema = new mongoose.Schema({
    chatRoomId: String,
    from: String,
    communicationType:{ type: String, enum: ['org', 'user'] }, //user = communication between org-user; org = comm.between org-org
    orgId:String
});



const chatRoom = mongoose.model("chatRoom", chatRoomSchema);

export default chatRoom
