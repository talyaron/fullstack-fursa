"use strict";
exports.__esModule = true;
var mongoose = require('mongoose');
var accident = require('./AccidentsSchema');
var orgClient = require('./OrgClientSchema');
var client = require('./ClientSchema');
var contentSchema = new mongoose.Schema({
    from: orgClient | client,
    to: orgClient | client,
    message: String,
    date: { type: Date, "default": new Date() },
    seen: { type: Boolean }
});
var chatSchema = new mongoose.Schema({
    // from: orgClient | client,
    // to: orgClient | client,
    chatMembers: { first: client, second: orgClient },
    content: [contentSchema]
});
var chat = mongoose.model('clientSchema', chatSchema);
module.exports = chat;
