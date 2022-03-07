export { }
const mongoose = require('mongoose');
const accident = require('./AccidentsSchema');
const orgClient = require('./OrgClientSchema');
const user = require('./ClientSchema');

const messagesSchema = new mongoose.Schema({
    from: orgClient | user, // to send the whole user or just ID/type
    to: orgClient | user,
    message: String,
    date: {type:Date,default:new Date()},
    toSeenMessage:{type:Boolean},
    accidentId:String
})

// const chatSchema = new mongoose.Schema({
//     // from: orgClient | client,
//     // to: orgClient | client,
//     chatMembers:{first:user, second:orgClient},
//     content: [contentSchema]
// })

const chat = mongoose.model('clientSchema', messagesSchema);

module.exports = chat;