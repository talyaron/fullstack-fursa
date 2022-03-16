const express = require('express');
const router = express.Router();
import Favorites from '../model/schema/favoritesModel'
import Users from '../model/schema/userModel'
import { isUser } from '../controller/userController'

router.get('/get-user-favorite', isUser, async (req, res) => {
    try {

        const userId = req.userId;
        if (!userId) throw "invalid fields"
        const fav = await Favorites.find({ "userId": userId });
        res.send({ "favorite": fav })
    } catch (error) {
        res.send({ error });
    }

})


router.post('/add-user-favorite', isUser, async (req, res) => {
    try {
        const { restId } = req.body
        const userId = req.userId;
        if (!userId || !restId) throw "invalid fields"
        const fav = await Favorites.find({ "userId": userId, "restId": restId });
        if (fav.length > 0) {
            res.send({ "add": false })
        } else {
            const userFavorite = new Favorites({ "userId": userId, "restId": restId })
            await userFavorite.save()
            const favs = await Favorites.find({ "userId": userId });
            res.send({ "add": true, "favorite": favs })
        }
    } catch (error) {
        res.send({ error });
    }

})

router.delete('/delete-user-favorite', isUser, async (req, res) => {
    try {
        const { restId } = req.body
        const userId = req.userId;
        if (!userId || !restId) throw "invalid fields"
        const fav = await Favorites.find({ "userId": userId, "restId": restId });
        if (fav.length === 0) {
            res.send({ "del": false })
        } else {
            await Favorites.deleteOne({ "userId": userId, "restId": restId })
            const favs = await Favorites.find({ "userId": userId });
            res.send({ "del": true, "favorite": favs })
        }
    } catch (error) {
        res.send({ error });
    }

})



module.exports = router;