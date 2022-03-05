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
  //id: Object
})

//the collections

const Select = mongoose.model('select recipe', selectRecipe);
const top10 = mongoose.model('Top10', recipeInfo);
const recent = mongoose.model('Recent Recipes', recipeInfo);
const userRecipes = mongoose.model('My Recipes', recipeInfo);

//mitzy.save().then(res=>{console.log(res)}).catch(err=>console.log(err));

//select recipe

async function getSelectRecipe(): Promise<any> {
  try {
    const select = await Select.find({});
    return select;
  } catch (err: any) {
    console.error(err);
    return false;
  }
}

app.get('/get-select-recipe', async (req, res) => {
  try {
    const select = await getSelectRecipe();
    res.status(200).send(select[0]);
  } catch (error: any) {
    res.status(400).send({ error: error.message });
  }
})

app.post('/update-select-recipe', async (req, res) => {
  try {
    console.log("Yes")
    const { info, from, isNew} = req.body;
    const select = await getSelectRecipe();
    const filter = {_id: select[0]._id};
    let doc = await Select.deleteOne(filter);
    console.log(doc)

    const newSelect = new Select({
      info:info,
      from:from,
      isNew_:isNew
    })
    let newSelect_ = await newSelect.save()
    console.log(newSelect_)
    //const update = {info:info, from:from, isNew_:isNew}
    //doc = await Select.findOneAndUpdate(filter, update);
    //console.log(doc)
    res.status(200).send(newSelect_);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
})

app.patch('/edit-select-recipe', async (req, res) => {
  try {
    const info = req.body;
    const select = await getSelectRecipe();
    const filter = select[0];
    const update = {info:info}
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

app.put('/edit-top10', async(req, res) => {
  try {
    const edit = req.body;
    const filter = {_id: edit._id}
    const update = edit
    let doc = await top10.findOneAndUpdate(filter, update);
    res.status(200).send(doc);
  } catch (error) {
    
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

app.put('/edit-recent', async(req, res) => {
  try {
    const edit = req.body;
    const filter = {_id: edit._id}
    const update = edit
    let doc = await recent.findOneAndUpdate(filter, update);
    res.status(200).send(doc);
  } catch (error) {
    
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

app.post('/add-new-userRecipes',async (req, res) => {
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

app.put('/edit-userRecipes', async(req, res) => {
  try {
    const edit = req.body;
    const filter = {_id: edit._id}
    const update = edit
    let doc = await userRecipes.findOneAndUpdate(filter, update);
    res.status(200).send(doc);
  } catch (error) {
    
  }
})

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});