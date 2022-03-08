const express = require("express");
const router = express.Router();
import Products from "../model/schema/productSchema";

router.post("/add-product", async (req, res) => {
  try {
    console.log("hi ra");
    //           name: String,
    //   typeId: String,
    //   price: Number,
    //   description: String,
    //   quantity: Number,
    const { name, typeId, url, price, description, quantity } = req.body;

    console.log("hi raneen");
    if (!name) throw new Error("No name in body");
    if (!typeId) throw new Error("No typeId in body");
    if (!url) throw new Error("No url in body");
    if (!price) throw new Error("No price in body");
    if (!description) throw new Error("No description in body");
    if (!quantity) throw new Error("No quantity in body");
    console.log("hi raneen123");
    //  const {data} = await axios.post('/add-user',{name:name,city:city,password:password});
    //  console.log(data)
    const newProduct = new Products({
      name,
      typeId,
      url,
      price,
      description,
      quantity,
    });

    // const query = { name:name},

    //   options = { upsert: true, new: true, setDefaultsOnInsert: true };

    //  const oldItem = await Users.findOneAndUpdate(query,ownerDB,options);
    console.log(newProduct);
    res.send(newProduct);
    newProduct.save();
    console.log("Hello World! all");
  } catch (error) {
    // console.info('ON app.post("/add-product"');
    // console.log(req.body);
    // console.error(error.message);
    // res.send({ error: error.message });
  }
});
router.patch("/get-product", async (req, res) => {
  try {
    const { typeID } = req.body;
    console.log(typeID);
     console.log("typeID");
    const filter = { _typeID: typeID };

    const products = await Products.find({ typeId: typeID });
    console.log(products);
    return products;
  } catch (err: any) {
    console.error(err);
    return false;
  }
});

// app.patch("/update-cat", async (req, res) => {
//   try {
//     const { name, city, id } = req.body;

//     const filter = { _id: id };
//     const update = { name: name, address: { city: city } };
//     //update the DB
//     let doc = await Cats.findOneAndUpdate(filter, update);

//     res.send({ ok: true, doc });
//   } catch (err) {
//     console.error(err);
//     res.status(400).send({ error: err.message });
//   }
// });

module.exports = router;
