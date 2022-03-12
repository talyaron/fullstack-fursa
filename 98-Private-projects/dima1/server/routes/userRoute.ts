const express = require('express');
const router = express.Router();
import User from '../schemas/userModel';
import jwt from "jwt-simple";

router.post('/register', async (req, res) => {
    try {
        const { name, email, password, phone } = req.body;
        const userByEmail = await User.findOne({ email: email });
        const userByName = await User.findOne({ name : name });
        if (!userByEmail && !userByName) {
            const newUser = await new User({ name : name, email: email, password: password, phone : phone, description: '' });
            newUser.save();
            res.status(200).send('user saved');
        }
        else {
            if(userByEmail && userByName)
                res.send('the name and email already exist')
            else if (userByEmail) {
                res.send('this email already exists')
            } else {
                res.send('this name already exists')
            }
        }
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
})

router.post('/LogIn', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user_ = await User.findOne({ email: email });

        if (!user_) {
            console.log("not found1")
            res.send({ ok: false })
        }
        else {
            if (user_.password === password) {
                const JWT_SECRET = process.env.JWT_SECRET;
                const encodedJWT = jwt.encode(
                    { userId: user_._id, role: "user" },
                    JWT_SECRET
                );
                console.log("found")
                res.cookie("userLogIn", encodedJWT, {
                    httpOnly: true,
                    maxAge: 60 * 60 * 1000,
                })
                res.status(200).send({ ok: true, user: user_ });
            }
            else {
                console.log("not found2")
                res.send({ ok: false })
            }
        }
    } catch (error) {
        console.log("not found3")
        res.status(400).send({ ok: false, error: error.message });
    }
})

router.post('/get-user', async (req, res) => {
    try {
        const { name } = req.body;
        const user_ = await User.findOne({ name : name });
        if(user_){
            res.status(200).send({ok : true, user : user_})
        }else {
            res.send({ ok: false })
        }
    } catch (error) {
        res.status(400).send({ ok: false, error: error.message });
    }
})

router.patch('/reset-password',async (req, res) => {
    try {
        const { email, password } = req.body;
        const filter = {email : email};
        const update = {password : password}
        const user_ = await User.findOneAndUpdate(filter, update);
        if(user_){
            res.send('reset');
        }else {
            res.send('Couldn`t find your email address.')
        }
    } catch (error) {
        res.status(400).send({ ok: false, error: error.message });
    }
})


module.exports = router;