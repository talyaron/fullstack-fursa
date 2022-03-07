const express = require('express');
const router = express.Router();
import Products from '../model/schema/productSchema';

router.post("/add-product", async (req, res)=>{
    try {
//           name: String,
//   typeId: String,
//   price: Number,
//   description: String,
//   quantity: Number,
        const {name, typeId,url, price,description,quantity} = req.body;
    
        
        if (!name) throw new Error("No name in body");
        if (!typeId) throw new Error("No typeId in body");
        if (!url) throw new Error("No url in body");
             if (!price) throw new Error("No price in body");
                  if (!description) throw new Error("No description in body");
                       if (!quantity) throw new Error("No quantity in body");

    
        const ownerDB = new Users({
          name,
          typeId,
          city,
        });
    
        const query = { name:name},
      
          options = { upsert: true, new: true, setDefaultsOnInsert: true };
      
        const oldItem = await Users.findOneAndUpdate(query,ownerDB,options);
        console.log(oldItem);
        res.send(oldItem);
      } catch (error) {
        console.info('ON app.post("/add-user"')
        console.log(req.body);
        console.error(error.message);
        res.send({ error: error.message });
      }
})

module.exports = router;