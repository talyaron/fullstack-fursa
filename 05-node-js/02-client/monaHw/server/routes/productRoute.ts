const express = require('express');
const router = express.Router();
import Product from "../model/schema/productSchema";
import RelatedProduct from "../model/schema/relatedProductSchema";
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
  router.post('/add-related-product',isAdmin,async (req,res)=>{
    try{
       const {type,name,price,amount}=req.body;
        if(!name||!price||!type||!amount) throw 'invalid fields';
        const product=new RelatedProduct({type,name,price,amount});
        await product.save().then((res)=>{
            console.log(res);
        });
        res.send({val:'OK'})
        
    } catch(error:any){
        res.status(400).send({error:error.message})
      }
})
router.post('/get-products-by-type',async (req,res)=>{
  try{
    const {type}=req.body;
    if(!type) throw 'invalid fields//'
  const products=await RelatedProduct.find({type:type});
  // console.log(Raws)
  res.status(200).send(products)
}
catch (error) {
  console.info(error);
  res.send({ error });
}

})
router.get('/get-all-RelatedProducts',async (req,res)=>{
  try{
  const products=await RelatedProduct.find({});
  res.status(200).send(products)
}
catch (error) {
  console.info(error);
  res.send({ error });
}

})

//update product amount in stock
router.patch('/update-product-stock',async(req,res)=>{
  try{
  const {name,amount}=req.body;
  const filter={name:name};
  const update={amount:amount};
 
  let doc = await RelatedProduct.findOneAndUpdate(filter, update);
  res.send({ ok: true, doc });
  }catch(error){
    console.info(error);
    res.send({error});
  }

})
module.exports=router;