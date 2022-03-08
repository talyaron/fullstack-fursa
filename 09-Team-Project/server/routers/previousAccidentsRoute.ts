export { }
const express = require('express');
const router = express.Router();
const previousAccidentController = require('../controllers/previousAccidentController');


// router.
//     route('/getAllAccidents').
//     get(accidentController.getAllAccidents);

// router.
//     route('/getAccidentByID').
//     post(accidentController.getAccidentByID);

// router.
//     route('/getAccidenstByUserName').
//     post(accidentController.getAccidenstByUserName);

    router.
    route('/get-previous-accidents').
    post(previousAccidentController.getAllAccidents);

    // router.
    // route('/addNewAccident').
    // post(accidentController.addNewAccident);

module.exports = router;