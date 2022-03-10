const mongoose = require('mongoose');

const treatmentSchema = new mongoose.Schema({
    title: String,
    text: String,
    img: String
  });



const Treatment = mongoose.model('treatments', treatmentSchema);

export default Treatment;