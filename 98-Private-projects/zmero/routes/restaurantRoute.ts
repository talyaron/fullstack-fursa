const express = require('express');
const router = express.Router();
import Resteraunts from '../model/schema/restaurantsModel'
import Regions from '../model/schema/regionModel'


router.get('/get-all-restaurants', async (req, res) => {
    try {
        const resteraunt = await Resteraunts.find({});
        res.send({ resteraunt })
    } catch (error) {
        res.send({ error });
    }

})

router.post('/get-famous-restaurants', async (req, res) => {
    try {
        const { region } = req.body
        if (!region) throw 'invalid fields'
        const resteraunt = await Resteraunts.find({ "region": region });
        res.send({ resteraunt })
    } catch (error) {
        res.send({ error });
    }

})

router.get('/get-regions', async (req, res) => {
    try {
        const regions = await Regions.find({});
        res.send({ regions })
    } catch (error) {
        res.send({ error });
    }

})
module.exports = router;