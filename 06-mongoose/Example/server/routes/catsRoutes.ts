const express = require("express");
const router = express.Router();
import Cats from "../model/schema/catsModel";
import { getKitens } from "../controlers/catsControlers";

router
  .get("/get-all-kitens", async (req, res) => {
    const kittens = await getKitens();
    res.send(kittens);
  })
  .post('/add-cat', async (req, res)=>{
    try {

        const {name, city, ownerId, ownerCity, ownerName} = req.body;
        if(!name || !city || !ownerId || ! ownerCity ||! ownerName) throw new Error('Missing paramter on request')
        
        const newCat = new Cats({
            name,
            city,
            owner:{
                name:ownerName,
                city:ownerCity,
                id:ownerId
            }
        })

        const result = await newCat.save();
        res.send(result)

        
    } catch (error) {
        console.log(error)
        res.send({error:error.message})
    }
  })
  .patch("/update-cat", async (req, res) => {
    try {
      const { name, city, id } = req.body;

      const filter = { _id: id };
      const update = { name: name, address: { city: city } };
      //update the DB
      let doc = await Cats.findOneAndUpdate(filter, update);

      res.send({ ok: true, doc });
    } catch (err) {
      console.error(err);
      res.status(400).send({ error: err.message });
    }
  }).post("/delete-cat", async (req, res) => {
    try {
      const { id } = req.body;
  
      const filter = { _id: id };
  
      //delet on  DB
      let doc = await Cats.deleteOne(filter);
  
      res.send({ ok: true, doc });
    } catch (err) {
      console.error(err);
      res.status(400).send({ error: err.message });
    }
  });

export default router;
