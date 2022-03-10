"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var previousAccidentController = require('../controllers/previousAccidentController');
router.
    route('/get-previous-accidents').
    post(previousAccidentController.getPreviousAccidents);
module.exports = router;
