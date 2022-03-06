export { }
const mongoose = require('mongoose');
const accident = require('./AccidentsSchema');
const orgClient = require('./OrgClientSchema');
const client = require('./ClientSchema');

const contentSchema = new mongoose.Schema({
    from: orgClient | client, // to send the whole user or just ID/type
    to: orgClient | client,
    message: String,
    date: {type:Date,default:new Date()},
    seen:{type:Boolean},
})

const chatSchema = new mongoose.Schema({
    // from: orgClient | client,
    // to: orgClient | client,
    chatMembers:{first:client, second:orgClient},
    content: [contentSchema]
})

const chat = mongoose.model('clientSchema', chatSchema);

module.exports = chat;