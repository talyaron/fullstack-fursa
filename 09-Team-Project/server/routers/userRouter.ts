const express = require('express');
const router = express.Router();
import Users from '../model/userModel'

router.post("/get-user", async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email, password)
        if (!password || !email) throw ' invalid fields'
        const _user = await Users.find({ "email": email, "password": password });
        if (_user.length > 0)
            res.send({ "log": true, "user": _user[0] })
        else res.send({ "log": false })
    } catch (error) {
        console.error(error.message);
        res.send({ error: error.message });
    }
})

module.exports = router;