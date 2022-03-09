const express = require('express');
const router = express.Router();
import { appendFile } from "fs";
import User from "../model/schema/userSchema";

router.post('/register',async (req,res)=>{
    const {name,email,phone,password}=req.body;
    if(!name||!email||!password) throw 'ivalid field values'
    try{
    const user=new User({name:name,email:email,phone:phone,password:password})
    user.save().then((res)=>{
        console.log(res);
      });
      res.send({val:"OK"})
    }
    catch(error:any){
        res.status(400).send({error:error.message})
      }

})
router.post('/login', async (req,res)=>{
  try{
    const {name,email,password}=req.body;
    if(!name||!email||!password) throw 'ivalid field values'
    const filter={email:email,password:password}
    const user=await User.findOne({email:email,password:password})
      if(user){
        console.log('found')
        res.cookie("login",{id:user._id})
        res.status(200).send({ok:true})
      }
      else{
        console.log('not found')
        res.send({ok:false})
      }
    }
    catch(error:any){
        res.status(400).send({error:error.message})
      }

})

router.post('/get-user',async (req,res)=>{
    try{
    const{email,password}=req.body;
    const filter={email:email,password:password};
    const user=await User.find({filter})
    // console.log(Raws)
    res.status(200).send(user)
  }
  catch (error) {
    console.info(error);
    res.send({ error });
  }

})
module.exports=router;;