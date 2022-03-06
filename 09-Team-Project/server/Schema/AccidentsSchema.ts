export { }
const mongoose = require('mongoose');

const accidentSchema = new mongoose.Schema({
    userID: { type: String, require: true },
    type: { type: String },
    video: { type: Object, require: false },
    picture: { type: Object, require: false },
    voiceCall: { type: Object, require: false },
    curLocation: { type: String, require: true },
    information: { type: String, require: false },
    emergency: { type: Boolean }
})

const accident = mongoose.model('accidentSchema', accidentSchema);

module.exports = accident;