export { }
const express = require('express');
const router = express.Router();
const accidentController = require('../controllers/accidentController');


router.
    route('/getAllAccidents').
    get(accidentController.getAllAccidents);

router.
    route('/getAccidentByID').
    post(accidentController.getAccidentByID);

router.
    route('/getAccidenstByUserName').
    post(accidentController.getAccidenstByUserName);

router.
    route('/getAccidenstByLocation').
    post(accidentController.getAccidenstByLocation);

    router.
    route('/addNewAccident').
    post(accidentController.addNewAccident);

module.exports = router;