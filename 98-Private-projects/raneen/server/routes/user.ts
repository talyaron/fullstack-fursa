const express = require('express');
const router = express.Router();
import user from '../model/schema/User';

router.post("/add-user", async (req, res) => {
  const { body } = req;
  console.log(body);
  user.post({ body });
  res.send({ message: "user created", user});
})

module.exports = router;