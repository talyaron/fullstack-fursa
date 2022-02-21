export { };
const express = require("express");
const router = express.Router();
const listController = require("../Controller/listController");

router
    .route("/addNewMeeting")
    .post(listController.addNewMeeting);

router
    .route("/getListByUser")
    .post(listController.getListByUser);

module.exports = router;