const express = require('express');
const router = express.Router();
import userRecipes from '../schemas/userRecipeModel';
import User from '../schemas/userModel';
import { response } from 'express';

router.get('/get-user-recipes', async (req, res) => {
    try {
        const {userLogIn} = req.cookies;
        const {id} = userLogIn;
        const user = await User.findOne({_id: id})
        if(user){
            const recipes = await userRecipes.find({});
            res.send({ok:true, recipes: recipes});
        }
        else{
            res.send({ok: false});
        }
    } catch (error: any) {
        res.send({ ok:false, error: error.message });
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

router.post('/register', async (req, res) => {
    try {
        const {email, password} = req.body;
        const user_ = await User.findOne({email: email});
        if(!user_){
            const newUser = await new User({email: email, password: password});
            newUser.save().then(console.log("user saved"));
            res.status(200).send({ok : true});
        }
        else{
            res.status(304).send({ok: false})
        }
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
})

router.post('/LogIn', async (req, res) => {
    try {
        console.log("LogIn")
        const {email, password} = req.body;
        const user_ = await User.findOne({email: email});
        if(!user_){
            console.log("not found1")
            res.status(304).send({ok: false})
        }
        else{
            if(user_.password === password){
                console.log("found")
                res.cookie("userLogIn", {id: user_._id})
                res.status(200).send({ok : true});
            }
            else {
                console.log("not found2")
                res.send({ok: false})
            }
        }
    } catch (error) {
        console.log("not found3")
        res.status(400).send({ok:false, error: error.message });
    }
})



module.exports = router;