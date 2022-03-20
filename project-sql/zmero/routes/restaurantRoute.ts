const express = require('express');
const router = express.Router();
import Resteraunts from '../model/schema/restaurantsModel'
import Regions from '../model/schema/regionModel'
import { isUser } from '../controller/userController'
import { con } from "../server";
router.get('/get-all-restaurants', async (req, res) => {
    try {
        const sql = `Select * from restaurant as r inner join photo as p on r.id=p.restId inner join categoryinrest as c on c.restid=r.id `
        con.query(sql, (err, result) => {
            try {
                if (err) throw err;
                console.log("1 record inserted");
                console.log(result)
                res.send({ resteraunt: result });
            } catch (err) {
                console.log(err.message);
                res.send({ error: err.message });
            }
        });
        //const resteraunt = await Resteraunts.find({});
        // res.send({ resteraunt })
    } catch (error) {
        res.send({ error });
    }

})
router.get('/get-all-owner-restaurants', isUser, async (req, res) => {
    try {
        const ownerId = req.userId
        const role = req.role
        if (role === "restaurateur") {
            const resteraunt = await Resteraunts.find({ "ownerId": ownerId });
            res.send({ resteraunt })
        } else res.status(401).send({ error: "Not authorized" });
    } catch (error) {
        res.send({ error });
    }

})

router.post('/get-famous-restaurants', async (req, res) => {
    try {
        const { region } = req.body
        if (!region) throw 'invalid fields'
        const sql = `Select * from restaurant as r inner join photo as p on r.id=p.restId inner join categoryinrest as c on c.restid=r.id where r.region="${region}" `
        con.query(sql, (err, result) => {
            try {
                if (err) throw err;
                console.log("1 record inserted");
                res.send({ resteraunt: result });
            } catch (err) {
                console.log(err.message);
                res.send({ error: err.message });
            }
        });
        //res.send({ resteraunt })
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