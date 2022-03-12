export { }
const express = require('express');
const router = express.Router();
const messsageController = require('../controllers/messageController');

router.
    route('/getAllMessages').
    get(messsageController.getAllMessages);
router.
    route('/getMessagesByUserName').
    post(messsageController.getMessagesByUserName);

router.
    route('/addNewMessages').
    post(messsageController.addNewMessages);

module.exports = router;