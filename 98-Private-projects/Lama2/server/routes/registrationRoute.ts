const express = require('express');
const router = express.Router();
import Registrations from '../model/schema/registrationModel';

async function getRegistrations(): Promise<any> {
    try {

        const registrations = await Registrations.find({});
        console.log(registrations);
        return registrations;
    } catch (err: any) {
        console.error(err)
        return false;
    }
}

router.get('/get-all-registrations', async (req: any, res: any) => {
    const registrations = await getRegistrations();
    res.send({ registrations: registrations });
})

router.post("/add-new-registration", async (req, res) => {
    try {
        const { course, level,name, age,  date } = req.body;
        if (!name || !course || !age || !level || !date) throw new Error("No data");

        const newRegis = new Registrations({
            course: course,
            level: level,
            name: name,
            age: age,
            date: date,
        });
        await newRegis.save().then((res) => {
            console.log(res);
        });
        res.send({ val: "OK" });
    } catch (err) {
        res.send({ error: err.message });
    }
});


module.exports = router;