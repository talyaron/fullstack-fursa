export { }
const express = require('express');
const router = express.Router();
const previousAccidentController = require('../controllers/previousAccidentController');


    router.
    route('/get-previous-accidents').
    post(previousAccidentController.getPreviousAccidents);


module.exports = router;