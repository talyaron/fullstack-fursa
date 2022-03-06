import SchoolClass from "../../model/schema/school/SchoolClass";

const express = require('express');
const router = express.Router();

async function getSchoolClasses(): Promise<any> {
    try {
        const schoolClasses = await SchoolClass.find({});
        // console.log("in getSchoolClasses")
        // console.log(schoolClasses);
        return schoolClasses;
    } catch (err: any) {
        console.error(err);
        return false;
    }
}

router.get('/get-classes', async (req, res) => {
    const classes = await getSchoolClasses();
    res.send(classes);
})

router.post('/add-class', async (req, res) => {
    try {
        const { name, teacher } = req.body;
        console.log(name)
        console.log(teacher)
        if (!name || !teacher) throw new Error("No data!");
        const newClass = new SchoolClass({
            name: name,
            teacher: teacher,
        });
        await newClass.save().then((res) => {
            console.log(res);
        });
        res.send({ val: "OK" });
    } catch (err) {
        res.send({ error: err.message });
    }
})

module.exports = router;