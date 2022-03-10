const express = require("express");
const router = express.Router();
import jwt from "jwt-simple";

//controlers
import { isAdmin, loginStatus } from "../controlers/login";
router
  .post("/login", async (req, res) => {
    //LOGIN
    try {
      const { password, name } = req.body;
      //check if user exist in DB
      //check if password equal to that in the database
      //if yes, send cookie with jwt

      const JWT_SECRET = process.env.JWT_SECRET;
      const encodedJWT = jwt.encode(
        { userId: name, role: "public" },
        JWT_SECRET
      );

      res.cookie("userInfo", encodedJWT, {
        httpOnly: true,
        maxAge: 60 * 60 * 1000,
      });
      res.send({ password, name });
    } catch (error) {
      console.log(req.body);
      console.error(error.message);
      res.send({ error: error.message });
    }
  })
  .get("/privateInfo", isAdmin, (req, res) => {
    res.send({ ok: true, info: "my secrets" });
  });

router.get("/get-users", async (req, res) => {});

module.exports = router;
