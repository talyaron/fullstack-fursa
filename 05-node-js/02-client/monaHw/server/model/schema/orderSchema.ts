
import User from './userSchema';
import  {UserSchema}  from './userSchema';
const mongoose = require("mongoose");


export const OrderSchema=new mongoose.Schema({
    woodName: String,
    woodlength: Number,
    amount: Number,
    price:Number,
    id: Number,
    color:String,
    width:Number,
    thick:Number,
    doorType:String,
    user:UserSchema
  });
  
  const Order=mongoose.model('Order',OrderSchema);
  
  export default Order;