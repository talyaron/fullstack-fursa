import { connection } from "../../server";

const express = require('express');
const router = express.Router();

router.post('/get-courses-by-class-id', async (req, res) => {
    const {id} = req.body;
    // const id = 1;
    const query = `SELECT test_schema.courses_table.id, test_schema.courses_table.name, test_schema.courses_table.classID, test_schema.teachers_table.firstName, test_schema.teachers_table.lastName
    FROM test_schema.courses_table INNER JOIN test_schema.teachers_table
    ON test_schema.courses_table.teacherID = test_schema.teachers_table.id
    WHERE test_schema.courses_table.classID=${id}`;

    connection.query(query, (err, result) => {
        try {
            if(err) throw err;
            res.send(result)
        } catch (error) {
            console.log(`In get-courses-by-class-id error: ${error.message}`);
            res.status(500).send({error: error.message});
        }
    })
})

module.exports = router;