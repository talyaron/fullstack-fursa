const express = require('express');
const router = express.Router();
import Users from '../model/userModel'

router.post("/get-user", async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email, password)
        if (!password || !email) throw ' invalid fields'
        const _user = await Users.findOne({ email: email });
        if (_user) {
            if (_user.password === password) {
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


module.exports = router;