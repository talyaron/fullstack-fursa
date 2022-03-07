import Cats from './model/schema/catsModel'
import Owners from './model/schema/ownerModel';

const express = require("express");
const app = express();
const port = 4000;
require("dotenv").config();

//static files
app.use(express.json());
app.use(express.static("client/build"));


//mongoose -- DB
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

const db = mongoose.connection;

async function main() {
  const password = process.env.MONGODB_PASSWORD;
  await mongoose.connect(
    `mongodb+srv://tal1:${password}@tal-test1.m39if.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  );
}

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("connected to DB!");
});

//--routes

import catsRoutes from './routes/catsRoutes';
app.use('/cats', catsRoutes);

const ownerRoute = require('./routes/ownersRoute')
app.use('/owenrs', ownerRoute);

//query

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
