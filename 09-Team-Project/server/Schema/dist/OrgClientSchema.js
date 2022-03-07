"use strict";
exports.__esModule = true;
var mongoose = require('mongoose');
var OrgClientSchema = new mongoose.Schema({
    userName: { type: String, require: true },
    password: { type: String, require: true },
    organizationName: { type: String, require: true },
    organizationCity: { type: String, require: true }
});
var orgClient = mongoose.model('orgClientSchema', OrgClientSchema);
module.exports = orgClient;
