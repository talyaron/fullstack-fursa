const express = require('express');
const router = express.Router();
import Users from '../model/schema/userModel'

router.get('/get-user', async (req, res) => {
    try {
        const { email, password } = req.query
        if (!email || !password) throw "invalid fields"
        const result = await Users.find({ "email": email, "password": password });
        if (result.length > 0)
            res.send({ "log": true, "user": result[0] })
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
            const user = new Users({ "fName": fName, "lName": lName, "email": email, "phone": phone, "region": region, "password": password })
            user.save()
            res.send({ "log": true, "user": user })
        }
    } catch (error) {
        res.send({ error });
    }

})


module.exports = router;