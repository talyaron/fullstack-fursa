const express = require('express');
const router = express.Router();
import jwt from "jwt-simple";
import User from '../model/schema/userModel';

//controller
import { isAdmin, loginStatus } from "../controllers/signInController";

router.get('/get-user',async (req:any, res:any)=>{
    try{
        const{email,pass}=req.query
        if(!email || !pass) throw "password or name is not correct"
        const user = await User.findOne({"email":email,"password":pass});
        if(user){
            res.coockie('userID',{id:user._id})
            res.send({"log":true,"user":user})
        }
        else{
            res.send({"log":false})
        }
    }catch(err){
        res.send({err});
    }

  })
  router.post('/login',async (req:any, res:any)=>{
    try{
        const{email,password}=req.body
           //check if user exist in DB
      //check if password equal to that in the database
      //if yes, send cookie with jwt
      console.log(req.body)
        if(!email || !password) throw "password or name is not correct"
        const JWT_SECRET = process.env.JWT_SECRET;
        const encodedJWT = jwt.encode(
          { userEmail: email, role: "admin" },
          JWT_SECRET
        );
        const user = await User.findOne({email:email,password:password});
        console.log({user})
        if(user){
            // console.log("faaaat")
            res.cookie("userInfo", encodedJWT, {
                httpOnly: true,
                maxAge: 60 * 60 * 1000,
              });
            // res.coockie('userID',{id:user._id})
            res.send({"log":true,"user":user})
        }
        else{
            res.send({"log":false})
        }
    }catch(err){
        res.send({err});
        console.error(err.message);
        res.send({ error: err.message });
    }

  })
  .get("/privateInfo", isAdmin, (req, res) => {
    res.send({ ok: true, info: "my secrets" });
  });


  router.post('/add-new-user',async (req:any, res:any)=>{
    const{firstName,lastName,email,password,phoneNumber}=req.body;
    console.log(req.body);
    // console.log(lastName);
    // console.log(email);
    // console.log(password);
    // console.log(phoneNumber);
    if(!firstName || !lastName || !email || !password || !phoneNumber) throw 'invalid field values'
    try{
        const user=new User({firstName:firstName,lastName:lastName,email:email,password:password,phoneNumber:phoneNumber})
        console.log(user ,"aaaaa")
    user.save().then((res)=>{
        console.log(res)
    });
    res.send({val:"OK"})
}
     
    catch(err){
        res.send({err});
    }

  })

 

//   router.get("/get-users", async (req, res) => {});
  
  
module.exports = router;