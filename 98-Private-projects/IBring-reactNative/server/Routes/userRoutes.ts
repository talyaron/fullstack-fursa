import { checkStatus } from "../Controller/userController";

export { };
const express = require("express");
const router = express.Router();
const userController = require("../Controller/userController");

router
    .route("/login")
    .post(userController.Login);

router
    .route("/signUp")
    .post(userController.SignUp);

router
    .route("/getAllUsers")
    .get(checkStatus, userController.getAllUsers);

router
    .route("/sendInvitation")
    .post(checkStatus, userController.sendInvitation);

router
    .route("/logout")
    .get(checkStatus, userController.LogOut);

module.exports = router;