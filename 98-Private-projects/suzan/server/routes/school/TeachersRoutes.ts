import { connection } from "../../server";

const express = require('express');
const router = express.Router();

router.get('/get-all-teachers', async (req, res) => {
    // const classes = await getSchoolClasses();
    // res.send(classes);
    const query = `SELECT * FROM test_schema.teachers_table`;
    connection.query(query, (err, result) => {
        try {
            if(err) throw err;
            res.send(result)
        } catch (error) {
            console.log(`In get-all-teachers error: ${error.message}`);
            res.status(500).send({error: error.message});
        }
    })
})

module.exports = router;