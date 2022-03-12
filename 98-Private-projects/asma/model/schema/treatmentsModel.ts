const mongoose = require('mongoose');

const treatmentSchema = new mongoose.Schema({
    name: String,
    text: String,
    img: String
  });



const Treatment = mongoose.model('treatments', treatmentSchema);

export default Treatment;