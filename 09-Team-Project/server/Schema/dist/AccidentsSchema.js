"use strict";
exports.__esModule = true;
var mongoose = require('mongoose');
var accidentSchema = new mongoose.Schema({
    userID: { type: String, require: true },
    type: { type: String },
    video: { type: Object, require: false },
    picture: { type: Object, require: false },
    voiceCall: { type: Object, require: false },
    curLocation: { type: String, require: true },
    information: { type: String, require: false },
    emergency: { type: Boolean }
});
var accident = mongoose.model('accidentSchema', accidentSchema);
module.exports = accident;
