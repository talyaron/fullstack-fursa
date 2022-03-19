const express = require('express');
const router = express.Router();
import top10 from '../schemas/topModel';
import { isUser } from '../controllers/userController';


router.get('/get-top10', isUser, async (req, res) => {
    try {
        const topRecipes = await top10.find({});
        res.status(200).send({ok:true, recipes:topRecipes});
    } catch (error: any) {
        res.status(400).send({ error: error.message });
    }
})

router.put('/edit-top10', async (req, res) => {
    try {
        const edit = req.body;
        const filter = { _id: edit._id }
        const update = edit
        let doc = await top10.findOneAndUpdate(filter, update);
        res.status(200).send(doc);
    } catch (error) {

    }
})

module.exports = router;