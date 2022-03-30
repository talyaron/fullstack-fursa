const express = require('express');
const router = express.Router();
import userRecipes from '../schemas/userRecipeModel';
import likes from '../schemas/likeModel';

router.post('/get-select-recipe', async (req, res) => {
  try {
    const { id } = req.body;
    const select = await userRecipes.findOne({ _id: id });
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
    const select = await userRecipes.findOne({ name: name_.name });
    if (select) {
      res.status(200).send({ ok: true, recipe: select });
    } else {
      res.send({ ok: false });
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
})

router.patch('/edit-select-recipe', async (req, res) => {
  try {
    const info = req.body; //the updated recipe
    const id = info._id;
    const filter = { _id: id };
    const update = info;
    const edit = await userRecipes.findOneAndUpdate(filter, update);
    if (edit) {
      res.status(200).send({ ok: true });
    }
    else res.status(200).send({ ok: false });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
})

router.post('/delete-recipe', async (req, res) => {
  try {
    const { id } = req.body;
    const delete_ = await userRecipes.deleteOne({ _id: id });
    const delete_likes = await likes.deleteOne({ recipeId: id });
    if (delete_ && delete_likes) res.status(200).send({ ok: true });
    else res.status(200).send({ ok: false });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
})

router.post('/get-recipe-likes', async (req, res) => {
  try {
    const { id } = req.body;
    const likes_ = await likes.findOne({ recipeId: id });
    if (likes_) res.status(200).send({ ok: true, info: { recipeId: likes_.recipeId, users: likes_.users } });
    else res.status(200).send({ ok: false, info: {} });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
})

router.post('/like-dislike', async (req, res) => {
  try {
    const { name, like, id } = req.body;
    if (like) {
      const like = await likes.findOneAndUpdate({ recipeId: id }, { $push: { "users": name } });
      const like1 = await userRecipes.findOneAndUpdate({ _id: id }, {$inc: { "likes": 1} });
      if (like && like1)
        res.status(200).send({ ok: true });
      else res.status(200).send({ ok: false });
    } else {
      const dislike = await likes.findOneAndUpdate({ recipeId: id }, { $pull: { "users": name } });
      const dislike1 = await userRecipes.findOneAndUpdate({ _id: id }, {$inc: { "likes": -1} });
      if (dislike && dislike1)
        res.status(200).send({ ok: true });
      else res.status(200).send({ ok: false });
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
})

module.exports = router;