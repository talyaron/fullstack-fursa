const express = require('express');
const router = express.Router();
//const Product = require('./Model/products');

router.get('/',(req,res)=>{
   res.send('We are on products');
});

router.post('/',(req,res)=>{
    res.send('We are on products');
 });


module.exports = router;
