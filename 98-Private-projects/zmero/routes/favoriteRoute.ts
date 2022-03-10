const express = require('express');
const router = express.Router();
import Favorites from '../model/schema/favoritesModel'
import Users from '../model/schema/userModel'
import { isUser } from '../controller/userController'

router.get('/get-user-favorite', isUser, async (req, res) => {
    try {

        const userId = req.userId;
        if (!userId) throw "invalid fields"
        const result = await Users.find({ "_id": userId });
        if (result.length > 0) {
            const fav = await Favorites.find({ "userId": userId });
            res.send({ "log": true, "favorite": fav })
        } else res.send({ "log": false })
    } catch (error) {
        res.send({ error });
    }

})


router.post('/add-user-favorite', isUser, async (req, res) => {
    try {
        const { restId } = req.body
        const userId = req.userId;
        if (!userId || !restId) throw "invalid fields"
        const result = await Users.find({ "_id": userId });
        if (result.length > 0) {
            const fav = await Favorites.find({ "userId": userId, "restId": restId });
            if (fav.length > 0) {
                res.send({ "log": true, "add": false })
            } else {
                const userFavorite = new Favorites({ "userId": userId, "restId": restId })
                await userFavorite.save()
                const favs = await Favorites.find({ "userId": userId });
                res.send({ "log": true, "add": true, "favorite": favs })
            }
        } else res.send({ "log": false })
    } catch (error) {
        res.send({ error });
    }

})

router.delete('/delete-user-favorite', isUser, async (req, res) => {
    try {
        const { restId } = req.body
        const userId = req.userId;
        if (!userId || !restId) throw "invalid fields"
        const result = await Users.find({ "_id": userId });
        if (result.length > 0) {
            const fav = await Favorites.find({ "userId": userId, "restId": restId });
            if (fav.length === 0) {
                res.send({ "log": true, "delete": false })
            } else {
                await Favorites.deleteOne({ "userId": userId, "restId": restId })
                const favs = await Favorites.find({ "userId": userId });
                res.send({ "log": true, "favorite": favs })
            }
        } else res.send({ "log": false })
    } catch (error) {
        res.send({ error });
    }

})



module.exports = router;