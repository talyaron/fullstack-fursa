const express = require('express');
const router = express.Router();
import Users from '../model/schema/userModel'
import jwt from "jwt-simple";
import { isUser } from '../controller/userController'

router.get('/log-in', async (req, res) => {
    try {
        const { email, password } = req.query
        if (!email || !password) throw "invalid fields"
        const result = await Users.find({ "email": email, "password": password });
        if (result.length > 0) {
            const JWT_SECRET = process.env.JWT_SECRET;
            const encodedJWT = jwt.encode(
                { userId: result[0]._id, role: result[0].type },
                JWT_SECRET
            );
            res.cookie('user', encodedJWT, {
                httpOnly: true,
                maxAge: 60 * 60 * 1000,
            })
            res.send({ "log": true, "user": result[0] })
        }
        else res.send({ "log": false })
    } catch (error) {
        res.send({ error });
    }

})

router.post('/sign-up', async (req, res) => {
    try {
        const { fName, lName, email, phone, region, password } = req.body
        if (!fName || !lName || !email || !phone || !region || !password) throw "invalid fields"
        const result = await Users.find({ email: email });
        if (result.length > 0)
            res.send({ "log": false })
        else {
            const user = new Users({ "fName": fName, "lName": lName, "email": email, "phone": phone, "region": region, "password": password, "type": "regular" })
            user.save()
            res.send({ "log": true })
        }
    } catch (error) {
        res.send({ error });
    }

})

router.post('/add-restaurateur', isUser, async (req, res) => {
    try {
        const { role } = req

        if (!role) throw "invalid fields"
        if (role === "admin") {
            const { fName, lName, email, phone, region, password } = req.body
            if (!fName || !lName || !email || !phone || !region || !password) throw "invalid fields"
            const result = await Users.find({ email: email });
            if (result.length > 0)
                res.send({ "add": false })
            else {
                const user = new Users({ "fName": fName, "lName": lName, "email": email, "phone": phone, "region": region, "password": password, "type": "restaurateur" })
                user.save()
                res.send({ "add": true })
            }
        } else res.status(401).send({ error: "Not authorized" });
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
        else res.send({ "log": false })
    } catch (error) {
        res.send({ error });
    }
})
router.get('/log-out', isUser, async (req, res) => {
    res.clearCookie("user")
        .status(200)
        .send({ "log": false })
})
module.exports = router;
