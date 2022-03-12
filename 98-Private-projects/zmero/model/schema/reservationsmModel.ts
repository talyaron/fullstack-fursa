const mongoose = require("mongoose");
const ReservationsSchema = mongoose.Schema({
    hour: Number,
    min: Number,
    year: Number,
    month: Number,
    day: Number,
    restId: String,
    userId: String,
    people: Number,
});

//the collection

const Reservations = mongoose.model('reservations', ReservationsSchema);
export default Reservations