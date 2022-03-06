export { }
const mongoose = require('mongoose');
const accident = require('./AccidentsSchema');
const orgClient = require('./OrgClientSchema');
const client = require('./ClientSchema');

const contentSchema = new mongoose.Schema({
    from: orgClient | client,
    to: orgClient | client,
    data: String,
    date: Date
})

const chatSchema = new mongoose.Schema({
    from: orgClient | client,
    to: orgClient | client,
    content: [contentSchema]
})

const chat = mongoose.model('clientSchema', chatSchema);

module.exports = chat;