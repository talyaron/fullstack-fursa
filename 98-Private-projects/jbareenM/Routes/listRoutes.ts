export { };
const express = require("express");
const router = express.Router();
const listController = require("../Controller/listController");

router
    .route("/addNewMeeting")
    .post(listController.addNewMeeting);

module.exports = router;