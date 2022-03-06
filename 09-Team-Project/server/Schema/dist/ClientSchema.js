"use strict";
exports.__esModule = true;
var mongoose = require('mongoose');
var accident = require('./AccidentsSchema');
var clientSchema = new mongoose.Schema({
    userName: { type: String, require: true },
    password: { type: String, require: true },
    accidents: [accident]
});
var client = mongoose.model('clientSchema', clientSchema);
module.exports = client;
