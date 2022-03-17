import SchoolClass from "../../model/schema/school/SchoolClass";
import { connection } from "../../server";

const express = require('express');
const router = express.Router();

// async function getSchoolClasses(): Promise<any> {
//     try {
//         const schoolClasses = await SchoolClass.find({});
//         // console.log("in getSchoolClasses")
//         // console.log(schoolClasses);
//         return schoolClasses;
//     } catch (err: any) {
//         console.error(err);
//         return false;
//     }
// }

router.get('/get-all-classes', async (req, res) => {
    // const classes = await getSchoolClasses();
    // res.send(classes);
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
    // const classes = await getSchoolClasses();
    // res.send(classes);
    const query = `SELECT test_schema.classes_table.name, test_schema.teachers_table.firstName, test_schema.teachers_table.lastName
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

router.get('/get-class-by-id', async(req, res) => {
    const id = 3;
    const query = `SELECT * FROM test_schema.classes_table WHERE id=${id}`;
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
    // try {
    //     const { name, teacher } = req.body;
    //     console.log(name)
    //     console.log(teacher)
    //     if (!name || !teacher) throw new Error("No data!");
    //     const newClass = new SchoolClass({
    //         name: name,
    //         teacher: teacher,
    //     });
    //     await newClass.save().then((res) => {
    //         console.log(res);
    //     });
    //     res.send({ val: "OK" });
    // } catch (err) {
    //     res.send({ error: err.message });
    // }
})

module.exports = router;