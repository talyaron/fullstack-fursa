const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')

const mongoose = require('mongoose');
require('dotenv').config();

const password=process.env.MONGODB_PASSWORD;

const app = express();
app.use(cors()) // Use this after the variable declaration
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./routes/routes.js')(app, fs);



main().catch(err => console.log(err));

async function main() {
    const password=process.env.MONGODB_PASSWORD;
  await mongoose.connect(`mongodb+srv://eliasrenawi:${password}@cluster0.yp2sn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
}

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("connected to DB!");
});



const server = app.listen(3001, () => {
    console.log('listening on port %s...', server.address().port);
});