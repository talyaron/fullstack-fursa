const express = require("express");
const router = express.Router();
import Owners from "../model/schema/ownerModel";

router
  .post("/register", async (req, res) => {
    try {
      const { password, name } = req.body;

      res.cookie("mySecretPassword", { id: name });
      res.send({ password, name });
    } catch (error) {
      console.log(req.body);
      console.error(error.message);
      res.send({ error: error.message });
    }
  })
  .get("/privateInfo", (req, res) => {
    //get cookie
    const { mySecretPassword } = req.cookies;
    const { id } = mySecretPassword;
    //get user from database
    // if exists, responce with user's data

    res.send({ ok: true });
  });

router.get("/get-users", async (req, res) => {});

module.exports = router;
