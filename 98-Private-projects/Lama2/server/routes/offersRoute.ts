const express = require('express');
const router = express.Router();
import { isAdmin, loginStatus } from '../controllers/signInController';
import Offers from '../model/schema/offersModel';

async function getOffers():Promise<any> {
    try{
     
    const offers = await Offers.find({});
    return offers;
    } catch(err:any){
      console.error(err)
      return false;
    }
  }

router.get('/get-all-offers',async (req:any, res:any)=>{
    const offers = await getOffers();
    res.send({offers:offers});
  })
  
  router.use(loginStatus)
  router.post("/add-new-offer",isAdmin, async (req, res) => {
    try {
      const { name, cost, description,hours } = req.body;
      if (!name || !cost || !description  || !hours) throw new Error("No data");
    
      const newOffer = new Offers({
        name: name,
        cost: cost,
        description: description,
        hours:hours,
      });
      await newOffer.save().then((res) => {
        console.log(res);
      });
      res.send({ val: "OK" });
    } catch (err) {
      res.send({ error: err.message });
    }
  });

  
module.exports = router;