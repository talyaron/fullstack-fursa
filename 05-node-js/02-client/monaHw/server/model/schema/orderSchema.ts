
import User from './userSchema';
import  {UserSchema}  from './userSchema';
const mongoose = require("mongoose");


export const OrderSchema=new mongoose.Schema({
    woodName: String,
    woodlength: Number,
    amount: Number,
    color:String,
    price:Number,
    width:Number,
    thick:Number,
    doorType:String,
    userId:String
  });
  
  const Order=mongoose.model('Order',OrderSchema);
  
  export default Order;