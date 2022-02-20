export { }
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: String
});

const ItemSchema = new mongoose.Schema({
    item: String,
    user: userSchema
});

const detailsSchema = new mongoose.Schema({
    imgURL: String,
    groupName: String,
    meetType: String,
    date: String,
    time: String,
    reminder: String,
    place: String,
    fewWords: String,
});

const ListSchema = new mongoose.Schema({
    meetingAdmin: userSchema,
    whoIsThere: [userSchema],
    bringItems: [ItemSchema],
    meetingDetails: detailsSchema
});

const List = mongoose.model("list", ListSchema);
module.exports = List;

/*
list ->
    who is there [Array]-> user 
    bringItems [Array]-> Item -> User
*/
