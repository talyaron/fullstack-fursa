const express = require('express');
const router = express.Router();
import Order from "../model/schema/orderSchema";

router.post('/add-order',async (req,res)=>{
    try{
      const order=req.body;
      console.log(order)
      const newOrder=new Order(order);
      await newOrder.save().then((res)=>{
        console.log(res);
      });
      res.send({val:"OK"})
    }catch(error:any){
      res.status(400).send({error:error.message})
    }
  })

  module.exports=router;