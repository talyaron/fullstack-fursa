import { Password } from "@mui/icons-material";
import loginStatus from "../../controllers/login";
import { connection } from "../../server";

const express = require('express');
const router = express.Router();

router.use(loginStatus);

router.get('/get-all-students', async (req, res) => {
    // const classes = await getSchoolClasses();
    // res.send(classes);
    const schoolId = req.userId;
    const query = `SELECT * FROM test_schema.students_table WHERE schoolID = ${schoolId}`;
    connection.query(query, (err, result) => {
        try {
            if(err) throw err;
            res.send(result)
        } catch (error) {
            console.log(`In get-all-students error: ${error.message}`);
            res.status(500).send({error: error.message});
        }
    })
})

router.post('/get-students-by-class-id', async (req, res) => {
    const {id} = req.body;
    const query = `SELECT * FROM test_schema.students_table WHERE classID = ${id}`;
    connection.query(query, (err, result) => {
        try {
            if (err) throw err;
            res.send(result);
        } catch (error) {
            console.log(`In get-students-by-class-id error: ${error}`);
            res.status(500).send({error: error.message});
        }
    })
})

router.post('/add-new-student', async (req, res) => {
    const {info} = req.body;
    const schoolId = req.userId;
    const username = 'username';
    const password = 'password';
    const status = 'student';
    // const schoolId = 1;

    const query = `INSERT INTO test_schema.students_table 
    (username, password, firstName, lastName, studentID, phone, email, fatherName, motherName, fatherPhone, motherPhone, status, schoolID)
    VALUES 
    ('${username}', '${password}', '${info.firstName}', '${info.lastName}', '${info.studentID}', 
    '${info.phone}','${info.email}', '${info.fatherName}', '${info.motherName}', '${info.fatherPhone}', 
    '${info.motherPhone}', '${status}', '${schoolId}')`;
    
    connection.query(query, (err, result) => {
        try {
            if (err) throw err;
            res.send(result);
        } catch (error) {
            console.log(`In add-new-student error: ${error}`);
            res.status(500).send({error: error.message});
        }
    })
})

module.exports = router;