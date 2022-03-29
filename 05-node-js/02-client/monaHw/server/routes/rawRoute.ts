const express = require('express');
const router = express.Router();
import { appendFile } from 'fs';
 import Raw from '../model/schema/rawSchema'
import { isAdmin, loginStatus } from './login';
router.use(loginStatus)
router.post('/add-Raw-Material',isAdmin,async (req,res)=>{
    try{
      console.log(req.body)
      const raw=req.body;
      console.log(raw)
      const newRaw=new Raw(raw);
      await newRaw.save().then((res)=>{
        console.log(res);
      });
      res.send({val:"OK"})
    }catch(error:any){
      res.status(400).send({error:error.message})
    }
  })
  
  router.get('/get-Raw-Material',async (req,res)=>{
    try{
    const Raws=await Raw.find({});
    // console.log(Raws)
    res.status(200).send(Raws)
  }
  catch (error) {
    console.info(error);
    res.send({ error });
  }
  
  })
  router.post('/get-Raw-Material-ByName',async (req,res)=>{
    try{
      const {name}=req.body;
      if(!name) throw 'invalid fields//'
    const Raws=await Raw.find({name:name});
    // console.log(Raws)
    res.status(200).send(Raws)
  }
  catch (error) {
    console.info(error);
    res.send({ error });
  }
  
  })

  router.patch('/update-raw',isAdmin,async(req,res)=>{
    try{
      console.log(req.body)
      const{name,pricePerMeter,lengths,id}=req.body;
      const filter={_id:id};
      console.log(pricePerMeter)
      const update={name:name,pricePerMeter:pricePerMeter,lengths:lengths}
      let doc = await Raw.findOneAndUpdate(filter, update);
      res.send({ ok: true, doc });
    } catch (err) {
      console.error(err);
      res.status(400).send({ error: err.message });
    }
  })

  router.post('/delete-raw',isAdmin,async (req,res)=>{
    try{
      const {id}=req.body;
      const filter={_id:id};
      console.log(filter)
      let doc=await Raw.deleteOne(filter);
      res.send({ok:true,doc});
    }catch(err){
      console.error(err)
      res.status(400).send({error:err.message})
    }
  });
  //update product amount in stock
router.patch('/update-raw-stock',async(req,res)=>{
  try{
  const {name,amount}=req.body;
  const filter={name:name};
  const update={amount:amount};
 
  let doc = await Raw.findOneAndUpdate(filter, update);
  res.send({ ok: true, doc });
  }catch(error){
    console.info(error);
    res.send({error});
  }

})
  module.exports=router;;