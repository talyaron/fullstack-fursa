
const mongoose = require("mongoose");

const storySchema = new mongoose.Schema({
    userId: String,
    Date: Date,
    content: String,
    type: String,
});



const Stories = mongoose.model("Stories", storySchema);

export default Stories
