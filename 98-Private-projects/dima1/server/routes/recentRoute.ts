const express = require('express');
const router = express.Router();
import recent from '../schemas/recentModel';
import { isUser } from '../controllers/userController';

router.get('/get-recent', isUser, async (req, res) => {
    try {
        const recentRecipes = await recent.find({});
        res.status(200).send({ok:true, recipes:recentRecipes});
    } catch (error: any) {
        res.status(400).send({ error: error.message });
    }
})

router.put('/edit-recent', async (req, res) => {
    try {
        const edit = req.body;
        const filter = { _id: edit._id }
        const update = edit
        let doc = await recent.findOneAndUpdate(filter, update);
        res.status(200).send(doc);
    } catch (error) {

    }
})

module.exports = router;