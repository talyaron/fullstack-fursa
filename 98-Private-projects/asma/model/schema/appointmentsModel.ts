const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  title: String,
  start: Date,
  end: Date,
  name: String,
  phone: String
});


const Appointment = mongoose.model('appointment', appointmentSchema);

export default Appointment;