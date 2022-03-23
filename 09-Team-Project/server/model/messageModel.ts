import { OrgSchema } from "./orgModel";

const mongoose = require("mongoose");

export const MessageSchema = new mongoose.Schema({
    chatId: String,
    chatRoomId: String,
    from: String,
    date: Date,
    type: { type: String, enum: ['video', 'picture', 'message', 'location'] },
    video: String,
    picture: String,
    message: String,
    location: { lat: String, lng: String },
    communicationType:{ type: String, enum: ['org', 'user'] }, //user = communication between org-user; org = comm.between org-org
    accidentId:String,
    orgId:String
});



const Messages = mongoose.model("Messages", MessageSchema);

export default Messages
