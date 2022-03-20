
const mongoose = require("mongoose");

const regionesSchema = mongoose.Schema({
    region: String,
    url: String,
});

const Regions = mongoose.model('regions', regionesSchema);


export default Regions