const express = require('express');
const router = express.Router();
import Select from '../schemas/selectModel';


async function getSelectRecipe(): Promise<any> {
    try {
      const select = await Select.find({});
      return select;
    } catch (err: any) {
      console.error(err);
      return false;
    }
  }
  
  router.get('/get-select-recipe', async (req, res) => {
    try {
      const select = await getSelectRecipe();
      res.status(200).send(select[0]);
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  })
  
  router.post('/update-select-recipe', async (req, res) => {
    try {
      console.log("Yes")
      const { info, from, isNew} = req.body;
      const select = await getSelectRecipe();
      const filter = {_id: select[0]._id};
      let doc = await Select.deleteOne(filter);
      console.log(doc)
  
      const newSelect = new Select({
        info:info,
        from:from,
        isNew_:isNew
      })
      let newSelect_ = await newSelect.save()
      console.log(newSelect_)
      //const update = {info:info, from:from, isNew_:isNew}
      //doc = await Select.findOneAndUpdate(filter, update);
      //console.log(doc)
      res.status(200).send(newSelect_);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  })
  
  router.patch('/edit-select-recipe', async (req, res) => {
    try {
      const info = req.body;
      const select = await getSelectRecipe();
      const filter = select[0];
      const update = {info:info}
      let doc = await Select.findOneAndUpdate(filter, update);
      res.status(200).send(doc);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  })

  module.exports = router;