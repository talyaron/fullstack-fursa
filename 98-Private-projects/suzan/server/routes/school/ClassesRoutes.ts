import SchoolClass from "../../model/schema/school/SchoolClass";
import { connection } from "../../server";

const express = require('express');
const router = express.Router();

router.get('/get-all-classes', async (req, res) => {
    const query = `SELECT * FROM test_schema.classes_table`;
    connection.query(query, (err, result) => {
        try {
            if(err) throw err;
            res.send(result)
        } catch (error) {
            console.log(`In get-all-classes error: ${error.message}`);
            res.status(500).send({error: error.message});
        }
    })
})

router.get('/get-classes-cards', async (req, res) => {
    const query = `SELECT test_schema.classes_table.id, test_schema.classes_table.name, test_schema.teachers_table.firstName, test_schema.teachers_table.lastName
    FROM test_schema.classes_table INNER JOIN test_schema.teachers_table 
    ON test_schema.classes_table.teacherID = test_schema.teachers_table.id`;
    connection.query(query, (err, result) => {
        try {
            if(err) throw err;
            res.send(result)
        } catch (error) {
            console.log(`In get-all-classes error: ${error.message}`);
            res.status(500).send({error: error.message});
        }
    })
})

router.post('/get-class-by-id', async(req, res) => {
    const {id} = req.body;
    const query = `SELECT test_schema.classes_table.id, test_schema.classes_table.name, test_schema.teachers_table.firstName, test_schema.teachers_table.lastName
    FROM test_schema.classes_table INNER JOIN test_schema.teachers_table 
    ON test_schema.classes_table.teacherID = test_schema.teachers_table.id
    WHERE test_schema.classes_table.id=${id}`;
    
    connection.query(query, (err, result) => {
        try {
            if(err) throw err;
            res.send(result);
        } catch (error) {
            console.log(`In get-class-by-id error: ${error.message}`);
            res.status(500).send({error:error.message})
        }
    })
})

router.post('/add-new-class', async (req, res) => {
    const name = 'class 5B';
    const teacher = 2;
    const school = 1;
    console.log('add class test')

    const query = `INSERT INTO test_schema.classes_table (name, teacherID, schoolID) VALUES ('test', 2, 1)`;
    connection.query(query, (err, result) => {
        try{
            if(err) throw err;
            res.send(result);
        }catch (error) {
            console.log(`In add-class error: ${error.message}`);
            res.status(500).send({error:error.message});
        }
    })
})

router.patch('/edit-class-teacher', async (req, res) => {
    const {classId, teacherId} = req.body;

    const query = `UPDATE test_schema.classes_table SET teacherID = ${teacherId} WHERE id = ${classId}`;
    connection.query(query, (err, result) => {
        try {
            if (err) throw err;
            res.send(result);
        } catch (error) {
            console.log(`In edit-class-teacher error: ${error.message}`);
            res.status(500).send({error:error.message});
        }
    })
})

module.exports = router;