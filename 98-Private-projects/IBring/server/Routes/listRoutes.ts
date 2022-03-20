import { checkStatus } from "../Controller/userController";

export { };
const express = require("express");
const router = express.Router();
const listController = require("../Controller/listController");

router
    .route("/addNewMeeting")
    .post(checkStatus, listController.addNewMeeting);

router
    .route("/getListByUser")
    .post(checkStatus, listController.getListByUser);

router
    .route("/getListByID")
    .post(checkStatus, listController.getListByID);

router
    .route("/updateListByID")
    .patch(checkStatus, listController.updateListByID);

router
    .route("/updateFrindList")
    .patch(checkStatus, listController.updateFrindList);

router
    .route("/testImageInsert")
    .post(listController.testImageInsert);

router
    .route("/getListByUserUpComing")
    .post(listController.getListByUserUpComing);

router
    .route("/getListByUserPrevious")
    .post(listController.getListByUserPrevious); 
module.exports = router;