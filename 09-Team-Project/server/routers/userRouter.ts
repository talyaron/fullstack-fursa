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
            else{
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

const userController = require('../controllers/userController');
router.
    route('/Login').
    post(userController.Login);
module.exports = router;