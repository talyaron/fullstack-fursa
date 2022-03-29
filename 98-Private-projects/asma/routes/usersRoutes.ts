import User from "../model/schema/usersModel";

const express = require('express');
const router = express.Router();
import jwt from "jwt-simple";


router.post('/logIn', async (req, res) => {
  const { user } = req.body;
  console.log(user, 'user');
  try {
    const users = await User.findOne({ name: user.name, password: user.password });
    if (users) {
      const JWT_SECRET = process.env.JWT_SECRET;
      const encodedJWT = jwt.encode(
        { userId: users._id, role: "admin" },
        JWT_SECRET
      );

      res.cookie("userLogIn", encodedJWT, {
        httpOnly: true,
        maxAge: 60 * 60 * 1000,
      })

      res.send({ "login": true, "user": users });
    }
    else
      res.send({ "login": false })
  }
  catch (err: any) {
    console.error(err)
    res.send(err);
  }
})

module.exports = router;