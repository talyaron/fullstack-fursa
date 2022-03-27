const express = require('express');
const router = express.Router();
import { appendFile } from "fs";
import User from "../model/schema/userSchema";
import jwt from "jwt-simple";
import { isAdmin } from "./login";

router.post('/register',async (req,res)=>{
  try{
    const {name,email,phone,password}=req.body;
    if(!name||!email||!password) throw 'ivalid field values'
    const userEmailExist=await User.findOne({email:email})
    if(!userEmailExist){
    const user=new User({name:name,email:email,phone:phone,password:password})
    await user.save().then((res)=>{
        console.log(res);
      });
      res.send({ok:true})
    }
    else res.send({ok:false,val:'email is already used'})
    }
  
    catch(error:any){
        res.status(400).send({error:error.message})
      }

})
router.post('/login' ,async (req,res)=>{
  try{
    const {email,password}=req.body;
    if(!email||!password) throw 'ivalid field values'
    const filter={email:email,password:password}
    const user=await User.findOne({email:email,password:password})
      if(user){
        console.log('found')
        const JWT_SECRET = process.env.JWT_SECRET;
        if(email==='mona_arabiya@hotmail.com')
        {const encodedJWT = jwt.encode( { userId: user._id, role: "admin" },JWT_SECRET);
        res.cookie("login",encodedJWT,{
          httpOnly: true,
          maxAge: 60 * 60 * 1000,
        })
        res.send({ ok: true, user: user })
      }
        else{
          const encodedJWT = jwt.encode( { userId: user._id, role: "public" },JWT_SECRET);
          res.cookie("login",encodedJWT,{
            httpOnly: true,
            maxAge: 60 * 60 * 1000,
          })
          res.send({ ok: true, user: user })

        }
        
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
    const user=await User.findOne({email:email})
    if(user)
    {
      if(user.password===password)
      res.status(200).send(user)

    }
    else console.log('wrong email or password')
  }
  catch (error) {
    console.info(error);
    res.send({ error });
  }

})
module.exports=router;