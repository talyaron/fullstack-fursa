export { }
const express = require('express');
const router = express.Router();
const previousAccidentController = require('../controllers/previousAccidentController');


    router.
    route('/getPreviousAccidents').
    post(previousAccidentController.getPreviousAccidents);


module.exports = router;