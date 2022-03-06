import Select from './schemas/selectModel';
import recipeInfo from './schemas/recipeInfoModel';

import express from 'express';
import axios from 'axios';
const app = express();
const port = 4000;
require('dotenv').config()


const mongoose = require('mongoose');

main().catch(err => console.log(err));

const db = mongoose.connection;


async function main() {
  const password = process.env.MONGODB_PASSWORD;
  await mongoose.connect(`mongodb+srv://Dima1:${password}@cluster0.tmxpm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
}

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("connected to DB!");
});


app.use(express.static('../client/build'));
app.use(express.json());

//mitzy.save().then(res=>{console.log(res)}).catch(err=>console.log(err));

//select recipe
const selectRoute = require('./routes/selectRoute');
app.use('/selectRecipe', selectRoute);

//top10 recipes

const topRoute = require('./routes/topRoute');
app.use('/topRecipes', topRoute);


//recent recipes

const recentRoute = require('./routes/recentRoute');
app.use('/recentRecipes', recentRoute);

//user recipes

const userRoute = require('./routes/userRoute');
app.use('/userRecipes', userRoute);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});