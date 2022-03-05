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

//Schemas

const kittySchema = new mongoose.Schema({
  name: String,
  address: {
    city: String
  }
});

const recipeInfo = new mongoose.Schema({
  id: Object,
  name: String,
  image: String,
  time: String,
  people: String,
  calories: String,
  ingredients: String,
  method: String
})

const selectRecipe = new mongoose.Schema({
  info: {
    _id: Object,
    name: String,
    image: String,
    time: String,
    people: String,
    calories: String,
    ingredients: String,
    method: String
  },
  from: String,
  isNew_: Boolean,
  id: Object
})

//the collections

const Select = mongoose.model('select recipe', selectRecipe);
const top10 = mongoose.model('Top10', recipeInfo);
const recent = mongoose.model('Recent Recipes', recipeInfo);
const userRecipes = mongoose.model('My Recipes', recipeInfo);

//mitzy.save().then(res=>{console.log(res)}).catch(err=>console.log(err));

//select recipe

app.get('/get-select-recipe', async (req, res) => {
  try {
    const response = await Select.find({});
    res.status(200).send(response[0]);
  } catch (error: any) {
    res.status(400).send({ error: error.message });
  }
})

app.patch('/update-select-recipe', async (req, res) => {
  try {
    const { info, from, isNew} = req.body;
    const select = await Select.find({});
    const filter = select[0];
    const update = {info:info, from:from, isNew_:isNew}
    let doc = await Select.findOneAndUpdate(filter, update);
    res.status(200).send(doc);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
})

//top10 recipes

app.get('/get-top10', async (req, res) => {
  try {
    const topRecipes = await top10.find({});
    res.status(200).send(topRecipes);
  } catch (error: any) {
    res.status(400).send({ error: error.message });
  }
})

//recent recipes

app.get('/get-recent', async (req, res) => {
  try {
    const recentRecipes = await recent.find({});
    res.status(200).send(recentRecipes);
  } catch (error: any) {
    res.status(400).send({ error: error.message });
  }
})

//user recipes

app.get('/get-user-recipes', async (req, res) => {
  try {
    const recipes = await userRecipes.find({});
    res.status(200).send(recipes);
  } catch (error: any) {
    res.status(400).send({ error: error.message });
  }
})

app.post('add-new-userRecipe',async (req, res) => {
  try {
    const recipe = req.body;
    const newRecipe = new userRecipes(recipe)
    await newRecipe.save().then((res) => {
      console.log(res);
    });
    res.send({ val: "OK" });
  } catch (error: any) {
    res.status(400).send({ error: error.message });
  }
})

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});