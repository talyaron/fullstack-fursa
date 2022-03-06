"use strict";
exports.__esModule = true;
var mongoose = require('mongoose');
var ClientSchema = new mongoose.Schema({
    userName: { type: String, require: true },
    password: { type: String, require: true },
    Organization: { type: String, require: true }
});
var orgClient = mongoose.model('orgClientSchema', OrgClientSchema);
module.exports = orgClient;
