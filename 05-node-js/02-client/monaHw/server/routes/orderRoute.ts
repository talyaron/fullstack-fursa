const express = require('express');
const router = express.Router();
import Order from "../model/schema/orderSchema";

router.post('/add-order',async(req,res)=>{
    try{
      const {woodName,woodlength,amount,user,thick,width}=req.body;

      if(!woodName||!woodlength||!amount||!user ||!thick ||!width) throw 'invalid fields'
    
      const newOrder=new Order({
        woodName,woodlength,width,thick,amount,user
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

  module.exports=router;