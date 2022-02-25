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

router
    .route("/getListByID")
    .post(listController.getListByID);

router
    .route("/updateListByID")
    .patch(listController.updateListByID);

router
    .route("/updateFrindList")
    .patch(listController.updateFrindList);

module.exports = router;