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
    console.log(likes_);
    if (likes_) res.status(200).send({ ok: true, info: { recipeId: likes_.recipeId, users: likes_.users } });
    else res.status(200).send({ ok: false, info: {} });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
})

router.post('/like-dislike', async (req, res) => {
  try {
    console.log('add-like');
    const { name, like, id } = req.body;
    console.log(name, like);
    if (like) {
      const like = await likes.findOneAndUpdate({ recipeId: id }, { $push: { "users": name } })
      if (like)
        res.status(200).send({ ok: true });
      else res.status(200).send({ ok: false });
    } else {
      const dislike = await likes.findOneAndUpdate({ recipeId: id }, { $pull: { "users": name } })
      if (dislike)
        res.status(200).send({ ok: true });
      else res.status(200).send({ ok: false });
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
})

module.exports = router;