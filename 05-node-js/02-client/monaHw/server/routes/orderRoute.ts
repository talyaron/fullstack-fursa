const express = require('express');
const router = express.Router();
import Order from "../model/schema/orderSchema";
import { isAdmin } from "./login";
import jwt from "jwt-simple";
import User from "../model/schema/userSchema";
import userOrder from "../model/schema/userOrderSchema";

router.post('/add-order',async(req,res)=>{
    try{
      const {woodName,woodlength,amount,userId,thick,width}=req.body;
      // console.log(woodName,woodlength,amount,userId,thick,width)
      if(!woodName||!woodlength||!amount||!userId ) throw 'invalid fields'
      const newOrder=new Order({
        woodName,woodlength,width,thick,amount,userId
      });
      
      
      await newOrder.save().then((res)=>{
        console.log(res);
      });
      res.send({val:"OK"})
    }catch(error:any){
      res.status(400).send({error:error.message})
    }
  })

  router.get('/get-order',async (req,res)=>{
    try{
    const orders=await Order.find({});
    // console.log(Raws)
    res.status(200).send(orders)
  }
  catch (error) {
    console.info(error);
    res.send({ error });
  }
  
  })
  router.get('/get-user-order',async(req,res)=>{
    try{
      const { login } = req.cookies;
        const JWT_SECRET = process.env.JWT_SECRET;
        const decodedJWT = jwt.decode(login, JWT_SECRET);
        const { userId } = decodedJWT;
        const user=await User.findOne({_id:userId})
        if(user){
        // console.log({user:{_id:userId}})
        // const filter={user:{_id:userId}};
        const userOrders=await Order.find({userId:user._id})
        res.status(200).send(userOrders)
        }
          

    }catch (error) {
      console.info(error);  
      res.send({ error });
    }
  })
  router.patch('/update-order',async(req,res)=>{
    try{
    const {_id,temp}=req.body;
    console.log(req.body)
    const filter={_id:_id};
    const update={amount:temp};
    console.log(update)
    console.log(filter)
    let doc = await Order.findOneAndUpdate(filter, update);
    res.send({ ok: true, doc });
    }catch(error){
      console.info(error);
      res.send({error});
    }
  
  })
  router.post('/delete-order',async(req,res)=>{
    try{
      const {id}=req.body;
      const filter={_id:id};
      console.log(filter)
      let doc=await Order.deleteOne(filter);
      res.send({ok:true,doc});
    }catch(err){
      console.error(err)
      res.status(400).send({error:err.message})
    }
    
  })

router.post('/checkOut',async(req,res)=>{
    try{
      const {order,date,userId,cash,creditCard,pickUp,delivery}=req.body;
     

      if(!order||!date||!userId) throw 'invalid fields'

      const newOrder=new userOrder({
        order,date,userId,cash,creditCard,pickUp,delivery
      });
      
      
      await newOrder.save().then((res)=>{
        // console.log(res);
      });
      res.send({val:"OK"})
    }catch(error:any){
      res.status(400).send({error:error.message})
    }
  })

  router.post('/get-checkout-orders',async(req,res)=>{
    try{
    const {userId}=req.body
    console.log(userId,'//////')
    const userCheckOutOrders=await userOrder.find({userId:userId})
    res.status(200).send(userCheckOutOrders)

    }catch(error:any){
      res.status(400).send({error:error.message})
    }
  })
  module.exports=router;