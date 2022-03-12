const express = require("express");
const router = express.Router();
import jwt from "jwt-simple";
import { isAdmin, loginStatus } from "../../controllers/login";

router.use(loginStatus);

router.post('/login', async (req, res) => {
    try {
        const { password, email, type } = req.body;
        const JWT_SECRET = process.env.JWT_SECRET;
        const encodedJWT = jwt.encode( 
            {userId:email, role:type},
            JWT_SECRET);

        res.cookie("userInfo", encodedJWT, {
            httpOnly: true,
            maxAge: 60 * 60 * 1000,
        });

        res.send({ email, password, type, ok:true});
    } catch (error) {
        console.log(req.body);
        console.error(error.message);
        res.send({ error: error.message });
    }
})

router.get('/get-private-info', isAdmin, async (req, res) => {
    res.send({info: "this is my secret info"});
  })

module.exports = router;
