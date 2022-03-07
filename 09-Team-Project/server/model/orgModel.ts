const mongoose = require('mongoose');

export const OrgSchema = new mongoose.Schema({
    orgName: String,
    email: String,
    password: String,
    phone: String,
    city: String,
    description: String,
    webUrl : String || undefined,
    accidentType : String , // the type that the organization help in . 
    // in the accident we must add the organization . 
    
})

const Organizations = mongoose.model('organization', OrgSchema);

export default Organizations;
