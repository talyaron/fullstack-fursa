const express = require('express');
const router = express.Router();
import User from '../model/schema/userModel';



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

  router.get('/login',async (req:any, res:any)=>{
    try{
        const{email,pass}=req.body
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


  router.post('/add-new-user',async (req:any, res:any)=>{
    const{firstName,lastName,email,password,phoneNumber}=req.body;
    if(!firstName || !lastName || !email || !password || !phoneNumber) throw 'invalid field values'
    try{
        const user=new User({firstName:firstName,lastName:lastName,email:email,password:password,phoneNumber:phoneNumber})
    user.save().then((res)=>{
        console.log(res)
    });
    res.send({val:"OK"})
}
     
    catch(err){
        res.send({err});
    }

  })
  
  
module.exports = router;