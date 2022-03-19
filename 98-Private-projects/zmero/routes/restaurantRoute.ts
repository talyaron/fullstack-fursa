const express = require('express');
const router = express.Router();
import Resteraunts from '../model/schema/restaurantsModel'


router.get('/get-all-restaurants', async (req, res) => {
    try {
        const resteraunt = await Resteraunts.find({});
        res.send({ resteraunt })
    } catch (error) {
        res.send({ error });
    }

})
module.exports = router;