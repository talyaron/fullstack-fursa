const express = require('express');
const router = express.Router();
import Select from '../schemas/selectModel';
import userRecipes from '../schemas/userRecipeModel';



router.post('/get-select-recipe', async (req, res) => {
  try {
    const { id } = req.body;
    console.log(id);
    const select = await userRecipes.findOne({ _id: id });
    console.log(select);
    if (select) {
      res.status(200).send({ ok: true, recipe: select });
    } else {
      res.send({ ok: false });
    }
  } catch (error: any) {
    res.status(400).send({ error: error.message });
  }
})

router.post('/get-recipe-byName', async (req, res) => {
  try {
    const { name_ } = req.body;
    console.log(name_.name)
    const select = await userRecipes.findOne({ name : name_.name});
    if (select) {
      res.status(200).send({ ok: true, recipe: select });
    } else {
      res.send({ ok: false });
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
})

// router.patch('/edit-select-recipe', async (req, res) => {
//   try {
//     const info = req.body;
//     const select = await getSelectRecipe();
//     const filter = select[0];
//     const update = { info: info }
//     let doc = await Select.findOneAndUpdate(filter, update);
//     res.status(200).send(doc);
//   } catch (error) {
//     res.status(400).send({ error: error.message });
//   }
// })

module.exports = router;