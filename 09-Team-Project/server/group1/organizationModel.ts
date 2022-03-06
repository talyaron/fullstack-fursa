const mongoose = require('mongoose');

const organizationInfo = new mongoose.Schema({
    id:String,
    orgName: String,
    email: String,
    password: String,
    phone: String,
    city: String,
    description: String,
    //accidents: Array<>
})

const organization = mongoose.model('emergency', organizationInfo);

export default organization;