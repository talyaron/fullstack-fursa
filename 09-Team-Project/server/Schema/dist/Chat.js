"use strict";
exports.__esModule = true;
var mongoose = require('mongoose');
var accident = require('./AccidentsSchema');
var orgClient = require('./OrgClientSchema');
var user = require('./ClientSchema');
var contentSchema = new mongoose.Schema({
    from: orgClient | user,
    to: orgClient | user,
    message: String,
    date: { type: Date, "default": new Date() },
    seen: { type: Boolean }
});
var chatSchema = new mongoose.Schema({
    // from: orgClient | client,
    // to: orgClient | client,
    chatMembers: { first: user, second: orgClient },
    content: [contentSchema]
});
var chat = mongoose.model('clientSchema', chatSchema);
module.exports = chat;
