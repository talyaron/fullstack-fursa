
import {OrderSchema} from './orderSchema';
import User from './userSchema';
import  {UserSchema}  from './userSchema';
const mongoose = require("mongoose");


export const userOrderSchema=new mongoose.Schema({
    userId:String,
    date:Date,
    cash:Boolean,
    creditCard:Boolean,
    delivery:Boolean,
    pickUp:Boolean,
    order:[OrderSchema]


  });
  
  const userOrder=mongoose.model('UserOrder',userOrderSchema);
  
  export default userOrder;