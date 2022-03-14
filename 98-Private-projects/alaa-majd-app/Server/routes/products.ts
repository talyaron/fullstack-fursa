const express = require('express');
const router = express.Router();
const Product = require('../Model/products');

router.get('/',(req,res)=>{
   res.send('We are on products');
});

router.post('/',(req,res)=>{
   try{
   const {newProduct} = req.body;
   const product = new Product({
     
   });
   product.save()
   res.send(product);
   } catch(error){
    res.send({ error });
   }
    res.log(req.body);
 });


module.exports = router;
