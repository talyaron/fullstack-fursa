export { }
const mongoose = require('mongoose');
const accident = require('./AccidentsSchema');

const clientSchema = new mongoose.Schema({
    userName: { type: String, require: true },
    password: { type: String, require: true },
    
    name:{ type: String, require: true },
    phone:{ type: String, require: true },
    city:{ type: String, require: true },

    accidents: [accident],
    
})

const client = mongoose.model('clientSchema', clientSchema);

module.exports = client;