
const express = require('express');
const router = express.Router();
 import Raw from '../model/schema/rawSchema'
router.post('/add-Raw-Material',async (req,res)=>{
    try{
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

  router.patch('/update-raw',async(req,res)=>{
    try{
      console.log(req.body)
      const{name,pricePerMeter,id}=req.body;
      const filter={_id:id};
      console.log(pricePerMeter)
      const update={name:name,pricePerMeter:pricePerMeter}
      let doc = await Raw.findOneAndUpdate(filter, update);
      res.send({ ok: true, doc });
    } catch (err) {
      console.error(err);
      res.status(400).send({ error: err.message });
    }
  })

  router.post('/delete-raw',async (req,res)=>{
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
  module.exports=router;;