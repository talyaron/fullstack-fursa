const express = require('express');
const router = express.Router();
import Reservations from '../model/schema/reservationsmModel';
import Users from '../model/schema/userModel'
import { isUser } from '../controller/userController'

router.get('/get-user-reservations', isUser, async (req, res) => {
    try {
        const userId = req.userId;
        if (!userId) throw "invalid fields"
        const reservation = await Reservations.find({ "userId": userId });
        res.send({ "reservations": reservation })
    } catch (error) {
        res.send({ error });
    }

})


router.post('/add-user-reservation', isUser, async (req, res) => {
    try {
        const userId = req.userId;
        const { restId, hour, year, min, day, month, people } = req.body
        if (!userId || !restId || !hour || !year || !min || !day || !month || !people) throw "invalid fields"
        const check = await Reservations.find({ "userId": userId, "restId": restId, "year": year, "day": day, "month": month + 1 })
        if (check.length == 0) {
            const userReservation = new Reservations({ "userId": userId, "restId": restId, "hour": hour, "year": year, "min": min, "day": day, "month": month + 1, "people": people })
            await userReservation.save()
            const reservation = await Reservations.find({ "userId": userId })
            res.send({ "add": true, "reservations": reservation })
        }
        else res.send({ "add": false })

    } catch (error) {
        res.send({ error });
    }

})

router.delete('/delete-user-reservation', isUser, async (req, res) => {
    try {
        const userId = req.userId;
        const { restId, id } = req.body
        if (!userId || !restId || !id) throw "invalid fields"
        const check = await Reservations.find({ "userId": userId, "restId": restId, "_id": id })
        if (check.length > 0) {
            await Reservations.deleteOne({ "_id": id })
            const reservation = await Reservations.find({ "userId": userId })
            res.send({ "del": true, "reservations": reservation })
        }
        else res.send({ "del": false })

    } catch (error) {
        res.send({ error });
    }

})


module.exports = router;