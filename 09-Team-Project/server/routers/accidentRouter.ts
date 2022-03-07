export {}
const express = require('express');
const router = express.Router();
const accidentController = require('../controllers/accidentController');


router.
    route('/getAllAccidents').
    get(accidentController.getAllAccidents);

module.exports = router;