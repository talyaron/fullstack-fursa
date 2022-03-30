const express = require('express');
const router = express.Router();
import userRecipes from '../schemas/userRecipeModel';
import User from '../schemas/userModel';
import likeModel from '../schemas/likeModel';
import jwt from "jwt-simple";
import { isUser } from '../controllers/userController';

router.get('/get-user-recipes', async (req, res) => {
    try {
        const { userLogIn } = req.cookies;
        const JWT_SECRET = process.env.JWT_SECRET;
        const decodedJWT = jwt.decode(userLogIn, JWT_SECRET);
        const { role, userId } = decodedJWT;
        const user = await User.findOne({ _id: userId })
        if (user) {
            const recipes = await userRecipes.find({ userName: user.name });
            if (role === 'user')
                res.send({ ok: true, recipes: recipes });
            else res.send({ ok: true, recipes: [] });
        }
        else {
            res.send({ ok: false });
        }
    } catch (error: any) {
        res.send({ ok: false, error: error.message });
    }
})

router.post('/add-new-userRecipe', async (req, res) => {
    try {
        const recipe = req.body;
        delete recipe._id;
        const newRecipe = new userRecipes(recipe);
        const add = await newRecipe.save();
        const newLikes = new likeModel({ "recipeId": add._id, users: [] });
        const likes = await newLikes.save();
        if (add && likes) {
            console.log("yes");
            res.send({ ok: true });
        }
        else res.send({ ok: false });
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

router.post('/get-recipes-ByType', async (req, res) => {
    try {
        const { type } = req.body;
        const recipes = await userRecipes.find({ types: { name: type, isTrue: true } })
        if (recipes) {
            res.send({ ok: true, recipes: recipes });
        }
        else {
            res.send({ ok: false });
        }
    } catch (error: any) {
        res.send({ ok: false, error: error.message });
    }
})

router.get('/get-all-recipes', async (req, res) => {
    try {
        const recipes = await userRecipes.find({});
        if (recipes) {
            res.send({ ok: true, recipes: recipes });
        }
        else {
            res.send({ ok: false });
        }
    } catch (error: any) {
        res.send({ ok: false, error: error.message });
    }
})

router.post('/get-search-recipes', async (req, res) => {
    try {
        const { select, searchText } = req.body;
        let filter;
        switch (select) {
            case 'name':
                filter = { name: {"$regex" : `.*${searchText}.*`, $options: 'i'} };
                break;
            case 'time':
                filter = { time: {"$regex" : `.*${searchText}.*`, $options: 'i'} };
                break;
            case 'calories':
                filter = { calories: {"$regex" : `.*${searchText}.*`, $options: 'i'} };
                break;
            case 'ingredients':
                filter = { ingredients: {"$regex" : `.*${searchText}.*`, $options: 'i'} };
                break;
            case 'servings':
                filter = { servings: {"$regex" : `.*${searchText}.*`, $options: 'i'} };
                break;
        }
        const recipes = await userRecipes.find(filter);
        if (recipes) {
            res.send({ ok: true, recipes: recipes });
        }
        else {
            res.send({ ok: false });
        }
    } catch (error: any) {
        res.send({ ok: false, error: error.message });
    }
})

module.exports = router;