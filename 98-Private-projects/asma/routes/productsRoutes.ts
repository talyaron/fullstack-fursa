import Product from "../model/schema/productsModel";

const express = require('express');
const router = express.Router();



router.post('/add-product', (req, res) => {
    try {
      const product = req.body.product;
      console.log(req.body,'in server');
      if (!product) throw new Error("No product in request");
      const event = new Product ({ name: product.name,text: product.text,img: product.img });
      event.save();
      res.send({ message: 'Done' });
    } catch (error) {
      res.send({ error });
    }
  });
  async function getProducts(): Promise<any> {
    try {
      const products = await Product.find({});
      //console.log(products,'products in server');
      return products;
    } catch (err: any) {
      console.error(err)
      return false;
    }
  }
  
  router.get('/get-products', async (req, res) => {
    const products = await getProducts();
    res.send(products);
  })



  router.post('/delete-product', async (req, res) => {
    try {
      const productId = req.body;
      if (!productId) throw new Error("No product in request");
      const filter = productId
      console.log(filter);
      let doc = await Product.deleteOne(filter);
      console.log('Deleted!!');
      res.send({ message: 'Deleted' });
    } catch (error) {
      res.send({ error });
    }
  });



  router.patch("/update-product", async (req, res) => {
    try {
      const { name, text,img, id } = req.body;
  
      const filter = { _id: id };
      const update = { name: name, text: text ,img:img };
      //update the DB
      let doc = await Product.findOneAndUpdate(filter, update);
  
      res.send({ ok: true, doc });
    } catch (err) {
      console.error(err);
      res.status(400).send({ error: err.message });
    }
  });


module.exports = router;