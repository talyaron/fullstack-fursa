import User from "./userSchema";

const mongoose = require("mongoose");

const OrderSchema=new mongoose.Schema({
    woodName: String,
    woodlength: Number,
    amount: Number,
    price:Number,
    id: Number,
    color:String,
    width:Number,
    thick:Number,
    doorType:String,
    user:User
  });
  
  const Order=mongoose.model('Order',OrderSchema);
  
  export default Order;