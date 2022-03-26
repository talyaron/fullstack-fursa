import Product from "../model/schema/productsModel";
import User from "../model/schema/usersModel";
import jwt from "jwt-simple";
const express = require('express');
const router = express.Router();
const multer = require('multer');



export function isAdmin(req, res, next) {
  try {
    const { userLogIn } = req.cookies;
    const JWT_SECRET = process.env.JWT_SECRET;
    const decodedJWT = jwt.decode(userLogIn, JWT_SECRET);
    //console.log(decodedJWT);
    const { role, userId } = decodedJWT;
    //console.log(role,userId);
    if (role === "admin") {
      next();
    } else {
      res.status(401).send({ error: "Not authorized" });
    }
  } catch (err) {
    res.send({ error: err.message });
  }
}


router.post('/add-product', isAdmin, (req, res) => {
  try {
    const product = req.body.product;
    console.log(req.body, 'in server');
    if (!product) throw new Error("No product in request");
    const event = new Product({ name: product.name, text: product.text, category: product.category, img: product.img });
    //console.log(product.img.name,'******************************************************');
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


router.get('/get-products', isAdmin, async (req, res) => {
  try {
    const products = await getProducts();
    res.send({ ok: true, products: products });
  } catch (error) {
    res.send({ ok: false, products: [] });
  }
})


async function getProductsByCategory(category): Promise<any> {
  try {
    const products = await Product.find({category:category});
    //console.log(products,'products in server');
    return products;
  } catch (err: any) {
    console.error(err)
    return false;
  }
}

router.post('/get-productsByCategory', async (req, res) => {
  try {
    const {category} = req.body;
    // console.log(category,' in server');
    const products = await getProductsByCategory(category);
    res.send({ ok: true, products: products });
  } catch (error) {
    res.send({ ok: false, products: [] });
  }
})


router.post('/delete-product', async (req, res) => {
  try {
    const productId = req.body;
    if (!productId) throw new Error("No product in request");
    const filter = productId
    console.log(filter);
    let doc = await Product.deleteOne(filter);
    //console.log('Deleted!!');
    res.send({ message: 'Deleted' });
  } catch (error) {
    res.send({ error });
  }
});



router.patch("/update-product", async (req, res) => {
  try {
    const { name, text, category, img, id } = req.body;
    const filter = { _id: id };
    const update = { name: name, text: text, category: category, img: img };
    //update the DB
    let doc = await Product.findOneAndUpdate(filter, update);
    res.send({ ok: true, doc });
  } catch (err) {
    console.error(err);
    res.status(400).send({ error: err.message });
  }
});


module.exports = router;