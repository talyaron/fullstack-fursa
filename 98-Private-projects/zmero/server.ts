import Resteraunts from './model/schema/restaurantsModel'
import Users from "./model/schema/userModel";
import Favorites from './model/schema/favoritesModel'
import Reservations from './model/schema/reservationsmModel';

const express = require('express');
const cookieParser = require('cookie-parser')
const app = express();
require('dotenv').config()
const port = 4001;

app.use(express.static('client/build'));
app.use(cookieParser())
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

//routes

const restaurantsRoute = require('./routes/restaurantRoute')
app.use('/restaurants', restaurantsRoute);

const userRoute = require('./routes/userRoute')
app.use('/users', userRoute);

const favoriteRoute = require('./routes/favoriteRoute')
app.use('/favorites', favoriteRoute);

const reservationRoute = require('./routes/reservationsRoute')
app.use('/reservations', reservationRoute);


//listen
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
