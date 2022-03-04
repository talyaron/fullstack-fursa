import { error } from "console";

const express = require('express');
const app = express();
require('dotenv').config()
const port = 4000;

app.use(express.static('client/build'));
app.use(express.json());

// mongodb
const mongoose = require('mongoose');

main().catch(err => console.log(err));
const db = mongoose.connection;


async function main() {
    const password = process.env.MONGODB_PASSWORD
    await mongoose.connect(`mongodb+srv://zmero123:${password}@cluster0.b4hx9.mongodb.net/fursaProject`)
}
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("connected to DB!");
});




//db collections and schema
const RestaurantsSchema = new mongoose.Schema({
    id: String,
    name: String,
    image: String,
    booking: Number,
    region: String,
    stars: Number,
    city: String,
    category: String,
    photos: [{
        type: String
    }],
    open: String,
    close: String,
    description: String,
    subCategory: [{
        type: String
    }],
});
const UsersSchema = mongoose.Schema({
    fName: String,
    lName: String,
    email: String,
    password: String,
    phone: String,
    region: String,
});
const FavoritesSchema = mongoose.Schema({
    userId: String,
    restId: String,
});

const ReservationsSchema = mongoose.Schema({
    hour: Number,
    min: Number,
    year: Number,
    month: Number,
    day: Number,
    restId: String,
    userId: String,
});

//the collection
const Resteraunts = mongoose.model('restaurants', RestaurantsSchema);
const Users = mongoose.model('users', UsersSchema);
const Favorites = mongoose.model('favorites', FavoritesSchema);
const Reservations = mongoose.model('reservations', ReservationsSchema);

//gets
app.get('/get-all-restaurants', async (req, res) => {
    try {
        const resteraunt = await Resteraunts.find({});
        res.send({ resteraunt })
    } catch (error) {
        res.send({ error });
    }

})

app.get('/get-user', async (req, res) => {
    try {
        const { email, password } = req.query
        if (!email || !password) throw "invalid fields"
        const result = await Users.find({ "email": email, "password": password });
        if (result.length > 0)
            res.send({ "log": true, "user": result[0] })
        else res.send({ "log": false })
    } catch (error) {
        res.send({ error });
    }

})

app.get('/get-user-favorite', async (req, res) => {
    try {

        const { userId } = req.query
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

app.get('/get-user-reservations', async (req, res) => {
    try {
        const { userId } = req.query
        if (!userId) throw "invalid fields"
        const result = await Users.find({ "_id": userId });
        if (result.length > 0) {
            const reservation = await Reservations.find({ "userId": userId });
            res.send({ "log": true, "reservations": reservation })
        }
        else res.send({ "log": false })
    } catch (error) {
        res.send({ error });
    }

})


//posts

app.post('/sign-up', async (req, res) => {
    try {
        const { fName, lName, email, phone, region, password } = req.body
        if (!fName || !lName || !email || !phone || !region || !password) throw "invalid fields"
        const result = await Users.find({ email: email });
        if (result.length > 0)
            res.send({ "log": false })
        else {
            const user = new Users({ "fName": fName, "lName": lName, "email": email, "phone": phone, "region": region, "password": password })
            user.save()
            res.send({ "log": true, "user": user })
        }
    } catch (error) {
        res.send({ error });
    }

})

app.post('/add-user-favorite', async (req, res) => {
    try {
        const { userId, restId } = req.body
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


app.post('/add-user-reservation', async (req, res) => {
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


//deletes
app.delete('/delete-user-favorite', async (req, res) => {
    try {
        const { userId, restId } = req.body
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

app.delete('/delete-user-reservation', async (req, res) => {
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

//listen
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
