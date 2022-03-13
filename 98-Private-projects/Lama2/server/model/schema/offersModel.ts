const mongoose = require("mongoose");

const OfferSchema = new mongoose.Schema({
    name: String,
    cost:Number,
    description:String,
    hours:Number,

  });

//the collection
const Offers = mongoose.model("Offer", OfferSchema);

export default Offers;
