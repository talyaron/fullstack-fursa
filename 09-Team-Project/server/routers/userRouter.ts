export { }
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.
    route('/Login').
    post(userController.Login);

    



module.exports = router;