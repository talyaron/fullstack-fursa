const express = require('express');
const router = express.Router();
import userRecipes from '../schemas/recipeInfoModel';

router.get('/get-user-recipes', async (req, res) => {
    try {
        const recipes = await userRecipes.find({});
        res.status(200).send(recipes);
    } catch (error: any) {
        res.status(400).send({ error: error.message });
    }
})

router.post('/add-new-userRecipes', async (req, res) => {
    try {
        const recipe = req.body;
        const newRecipe = new userRecipes(recipe)
        await newRecipe.save().then((res) => {
            console.log(res);
        });
        res.send({ val: "OK" });
    } catch (error: any) {
        res.status(400).send({ error: error.message });
    }
})

router.put('/edit-userRecipes', async (req, res) => {
    try {
        const edit = req.body;
        const filter = { _id: edit._id }
        const update = edit
        let doc = await userRecipes.findOneAndUpdate(filter, update);
        res.status(200).send(doc);
    } catch (error) {

    }
})

module.exports = router;