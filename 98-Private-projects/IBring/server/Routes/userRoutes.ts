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
    .get(userController.getAllUsers);

router
    .route("/sendInvitation")
    .post(userController.sendInvitation);


module.exports = router;