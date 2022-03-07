
const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    chatId: String,
    from: String,
    date: Date,
    type: { type: String, enum: ['video', 'picture', 'message', 'location'] },
    video: String,
    picture: String,
    message: String,
    location: { lat: String, lng: String }
});



const Messages = mongoose.model("Messages", messageSchema);

export default Messages
