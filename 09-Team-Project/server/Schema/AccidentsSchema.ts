export { }
const mongoose = require('mongoose');
const client = require('./ClientSchema');

const accidentSchema = new mongoose.Schema({
    userID: { type: String, require: true },
    type: { type: String },
    video: { type: Object, require: false },
    picture: { type: Object, require: false },
    voiceCall: { type: Object, require: false },
    curLocation: { type: String, require: true },
    information: { type: String, require: false },
    emergency: { type: Boolean },
    reportDate: {type:Date, default:new Date()},
    shareWith:[client],
})

const accident = mongoose.model('accidentSchema', accidentSchema);

module.exports = accident;