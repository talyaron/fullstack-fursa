
import {OrderSchema} from './orderSchema';
import User from './userSchema';
import  {UserSchema}  from './userSchema';
const mongoose = require("mongoose");


export const userOrderSchema=new mongoose.Schema({
    userId:String,
    date:Date,
    paymentMethod:String,
    orderCollection:String,
    order:[OrderSchema]


  });
  
  const userOrder=mongoose.model('UserOrder',userOrderSchema);
  
  export default userOrder;