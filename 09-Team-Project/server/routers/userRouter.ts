const express = require('express');
const router = express.Router();
import jwt from "jwt-simple";
import { isUser } from "../controllers/userController";
import Users from '../model/userModel'

router.post("/get-user", async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!password || !email) throw ' invalid fields'
        const _user = await Users.findOne({ email: email });
        if (_user) {
            if (_user.password === password) {
                const JWT_SECRET = process.env.JWT_SECRET;
                const encodedJWT = jwt.encode(
                    { userId: _user._id, role: _user.type },
                    JWT_SECRET
                );
                if (_user.type == "admin" || _user.type == "org") {
                    res.cookie('user', encodedJWT, {
                        httpOnly: true,
                        maxAge: 24 * 60 * 60 * 1000,
                    })
                } else {
                    res.cookie('user', encodedJWT, {
                        httpOnly: true,
                    })
                }
                res.send({ ok: true, user: _user })
            }
            else {
                res.send({ ok: false, message: "wrong email or password!" });
            }
        }
        else {
            res.send({ ok: false })
        }
    } catch (error) {
        res.send({ error: error.message });
    }
})

router.post('/sign-up', async (req, res) => {
    try {
        const { name, email, phone, location, password, gender } = req.body;
        if (!name || !gender || !email || !phone || !location || !password) throw "invalid fields"
        const result = await Users.find({ email: email });
        if (result.length > 0)
            res.send({ "log": false })
        else {
            const user = new Users({ "name": name, "email": email, "gender": gender, "phone": phone, "location": location, "password": password, "type": "public" })
            await user.save()
            res.send({ "log": true, "user": user })
        }
    } catch (error) {
        res.send({ error });
    }

})

router.get('/get-authentication', async (req, res) => {
    try {
        const { user } = req.cookies;
        if (user) {
            const JWT_SECRET = process.env.JWT_SECRET;
            const decodedJWT = jwt.decode(user, JWT_SECRET);
            const { userId } = decodedJWT;
            if (userId) {
                const result = await Users.find({ "_id": userId });
                if (result.length > 0) {
                    res.send({ "log": true, "user": result[0] })
                } else res.send({ "log": false })
            }
            else res.send({ "log": false })
        }
        else {
            const JWT_SECRET = process.env.JWT_SECRET;
            //add to db
            const newUser = new Users({ "type": "anonymous", "email": Date.now().toString() })
            const result = await newUser.save()
            const encodedJWT = jwt.encode(
                { userId: result._id, role: "anonymous" },
                JWT_SECRET
            );
            res.cookie('user', encodedJWT, {
                httpOnly: true,
            })
            res.send({ "log": true, "user": result })
        }
    } catch (error) {
        res.send({ error });
    }
})
router.get('/log-out', isUser, async (req, res) => {
    try {
        const role = req.role
        if (role === "admin" || role === "org" || role === "public") {
            res.clearCookie("user")
                .status(200)
        } else res.status(401).send({ error: "Not authorized" });
    } catch (error) {
        res.send({ error });
    }

})

module.exports = router;