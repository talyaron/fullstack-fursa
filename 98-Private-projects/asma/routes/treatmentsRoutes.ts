import Treatment from "../model/schema/treatmentsModel";

const express = require('express');
const router = express.Router();


async function getTreatments(title:string): Promise<any> {
    try {
      const treatments = await Treatment.find({title:title});
      return treatments;
    } catch (err: any) {
      console.error(err)
      return false;
    }
  }
  
  router.get('/get-CuppingTherapy', async (req, res) => {
    const treatments = await getTreatments("Cupping Therapy");
    res.send(treatments);
  })
  router.get('/get-FacialTreatment', async (req, res) => {
    const treatments = await getTreatments("Facial Treatment");
    res.send(treatments);
  })
  router.get('/get-HopiEarCandles', async (req, res) => {
    const treatments = await getTreatments("Hopi Ear Candles");
    res.send(treatments);
  })


  module.exports = router;