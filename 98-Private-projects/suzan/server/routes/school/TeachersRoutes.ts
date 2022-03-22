import loginStatus from "../../controllers/login";
import { connection } from "../../server";

const express = require('express');
const router = express.Router();

router.use(loginStatus);

router.get('/get-all-teachers', async (req, res) => {
    // const classes = await getSchoolClasses();
    // res.send(classes);
    const schoolId = req.userId;
    const query = `SELECT * FROM test_schema.teachers_table WHERE schoolID = ${schoolId}`;   
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

router.post('/add-new-teacher', async (req,res) => {
    const {info} = req.body;
    const schoolId = req.userId;
    const username = 'username';
    const password = 'password';
    // const schoolId = 1;

    const query = `INSERT INTO test_schema.teachers_table (username, password, firstName, lastName, 
        teacherID, phone, email, schoolID)
    VALUES ('${username}', '${password}', '${info.firstName}', '${info.lastName}', '${info.teacherID}', 
    '${info.phone}', '${info.email}', '${schoolId}')`;

    connection.query(query, (err, result) => {
        try {
            if (err) throw err;
            res.send(result);
        } catch (error) {
            console.log(`In add-new-teacher error: ${error.message}`);
            res.status(500).send({error: error.message});
        }
    })
})

module.exports = router;