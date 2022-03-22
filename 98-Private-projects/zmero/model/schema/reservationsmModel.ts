const mongoose = require("mongoose");
const ReservationsSchema = mongoose.Schema({
    date: Date,
    restId: String,
    userId: String,
    people: Number,
});

//the collection

const Reservations = mongoose.model('reservations', ReservationsSchema);
export default Reservations