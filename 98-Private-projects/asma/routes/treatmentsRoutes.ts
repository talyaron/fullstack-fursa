import Treatment from "../model/schema/treatmentsModel";

const express = require('express');
const router = express.Router();


async function getTreatment(name:string): Promise<any> {
    try {
      const treatment = await Treatment.find({name:name});
      return treatment;
    } catch (err: any) {
      console.error(err)
      return false;
    }
  }

  router.post('/get-treatmentByName', async (req, res) => {
    try {
      const name = req.body.treatment;
      const treatment = await getTreatment(name);
      res.send({ ok: true, treatment: treatment });
    } catch (error) {
      res.send({ ok: false, treatment: [] });
    }
  })

  async function getAllTreatments(): Promise<any> {
    try {
      const treatments = await Treatment.find({});
      return treatments;
    } catch (err: any) {
      console.error(err)
      return false;
    }
  }
  
  router.get('/get-treatments', async (req, res) => {
    try {
      const treatments = await  getAllTreatments();
      res.send({ ok: true, treatments: treatments });
    } catch (error) {
      res.send({ ok: false, treatments: [] });
    }
  })


  router.post('/add-treatment', (req, res) => {
    try {
      const treatment = req.body.treatment;
      console.log(req.body,'in server');
      if (!treatment) throw new Error("No product in request");
      const event = new Treatment ({ name: treatment.name,text: treatment.text,img: treatment.img });
      event.save();
      res.send({ message: 'Done' });
    } catch (error) {
      res.send({ error });
    }
  });  

  router.post('/delete-treatment', async (req, res) => {
    try {
      const treatmentId = req.body;
      if (!treatmentId) throw new Error("No product in request");
      const filter = treatmentId
      console.log(filter);
      let doc = await Treatment.deleteOne(filter);
      console.log('Deleted!!');
      res.send({ message: 'Deleted' });
    } catch (error) {
      res.send({ error });
    }
  });

  router.patch("/update-treatment", async (req, res) => {
    try {
      const { name, text,img, id } = req.body;
  
      const filter = { _id: id };
      const update = { name: name, text: text ,img:img };
      //update the DB
      let doc = await Treatment.findOneAndUpdate(filter, update);
  
      res.send({ ok: true, doc });
    } catch (err) {
      console.error(err);
      res.status(400).send({ error: err.message });
    }
  });

  module.exports = router;