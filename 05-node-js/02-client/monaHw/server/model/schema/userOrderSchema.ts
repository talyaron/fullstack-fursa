
import Order from './orderSchema';
import User from './userSchema';
import  {UserSchema}  from './userSchema';
const mongoose = require("mongoose");


export const userOrderSchema=new mongoose.Schema({
    order:[Order],
    user:UserSchema,
    date:Date,
    cash:Boolean,
    creditCard:Boolean,
    delivery:Boolean,
    pickUp:Boolean

  });
  
  const userOrder=mongoose.model('userOrder',userOrderSchema);
  
  export default userOrder;