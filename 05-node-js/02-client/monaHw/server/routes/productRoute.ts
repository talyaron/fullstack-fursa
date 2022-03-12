const express = require('express');
const router = express.Router();
import Product from "../model/schema/productSchema";
import { isAdmin } from "./login";
router.post('/add-product',isAdmin,async (req,res)=>{
    try{
       const {name,imgurl}=req.body;
        if(!name||!imgurl) throw 'invalid fields';
        const product=new Product({name,imgurl});
        await product.save().then((res)=>{
            console.log(res);
        });
        res.send({val:'OK'})
        
    } catch(error:any){
        res.status(400).send({error:error.message})
      }


})
router.get('/get-products',async (req,res)=>{
    try{
    const products=await Product.find({});
    // console.log(Raws)
    res.status(200).send(products)
  }
  catch (error) {
    console.info(error);
    res.send({ error });
  }
  
  })
module.exports=router;;