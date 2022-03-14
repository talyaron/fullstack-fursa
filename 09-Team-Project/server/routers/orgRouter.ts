const express = require('express');
const router = express.Router();
import Users from '../model/userModel'
const orgController = require('../controllers/orgController');

router.
    route('/login').
    post(orgController.Login);

router.
    route('/signup').
    post(orgController.Signup);

module.exports = router;