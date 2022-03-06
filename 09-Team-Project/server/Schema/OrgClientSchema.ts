export { }
const mongoose = require('mongoose');



const OrgClientSchema = new mongoose.Schema({
    userName: { type: String, require: true },
    password: { type: String, require: true },

    organizationName: { type: String, require: true },
    organizationCity: { type: String, require: true },

    // chatMessages:{}
})

const orgClient = mongoose.model('orgClientSchema', OrgClientSchema);

module.exports = orgClient;