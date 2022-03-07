
const mongoose = require("mongoose");

export const MessageSchema = new mongoose.Schema({
    chatId: String,
    from: String,
    date: Date,
    type: { type: String, enum: ['video', 'picture', 'message', 'location'] },
    video: String,
    picture: String,
    message: String,
    location: { lat: String, lng: String }
});



const Messages = mongoose.model("Messages", MessageSchema);

export default Messages
