const express = require('express');
const router = express.Router();
import Reservations from '../model/schema/reservationsmModel';
import Users from '../model/schema/userModel'

router.get('/get-user-reservations', async (req, res) => {
    try {
        const { MyId } = req.cookies;
        const { userId } = MyId
        if (!userId) throw "invalid fields"
        const result = await Users.find({ "_id": userId });
        if (result.length > 0) {
            const reservation = await Reservations.find({ "userId": userId });
            res.send({ "log": true, "reservations": reservation })
        }
        else res.sendStatus(403)
    } catch (error) {
        res.send({ error });
    }

})


router.post('/add-user-reservation', async (req, res) => {
    try {

        const { userId, restId, hour, year, min, day, month } = req.body
        if (!userId || !restId || !hour || !year || !min || !day || !month) throw "invalid fields"
        const result = await Users.find({ "_id": userId });
        if (result.length > 0) {
            const check = await Reservations.find({ "userId": userId, "restId": restId, "year": year, "day": day, "month": month + 1 })
            if (check.length == 0) {
                const userReservation = new Reservations({ "userId": userId, "restId": restId, "hour": hour, "year": year, "min": min, "day": day, "month": month + 1 })
                await userReservation.save()
                const reservation = await Reservations.find({ "userId": userId })
                res.send({ "log": true, "add": true, "reservations": reservation })
            }
            else res.send({ "log": true, "add": false })
        }
        else res.send({ "log": false })

    } catch (error) {
        res.send({ error });
    }

})

router.delete('/delete-user-reservation', async (req, res) => {
    try {

        const { userId, restId, id } = req.body
        if (!userId || !restId || !id) throw "invalid fields"
        const result = await Users.find({ "_id": userId });
        if (result.length > 0) {
            const check = await Reservations.find({ "userId": userId, "restId": restId, "_id": id })
            if (check.length > 0) {
                await Reservations.deleteOne({ "_id": id })
                const reservation = await Reservations.find({ "userId": userId })
                res.send({ "log": true, "delete": true, "reservations": reservation })
            }
            else res.send({ "log": true, "delete": false })
        }
        else res.send({ "log": false })

    } catch (error) {
        res.send({ error });
    }

})


module.exports = router;