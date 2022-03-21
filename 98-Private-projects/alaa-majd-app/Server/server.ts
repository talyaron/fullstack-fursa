import express from 'express';
const cookieParser = require('cookie-parser')
const mongoose = require("mongoose");
// const products = require('./Routers/ProductRouter')
const app = express();
const port = 4001;
const jwt = require('jwt-simple');
require('dotenv').config ();

app.use(cookieParser());
app.use(express.static('../Client/build'));
app.use(express.json());
app.get("/", (req,res)=>{
    res.cookie("cookies",{name:'alaa'})
    res.send("hello")
})



mongoose.connect('mongodb+srv://Alaa1:yEszVzboZEnwamwT@cluster0.es9yf.mongodb.net/test');
const db = mongoose.connection;
const userSchema = new mongoose.Schema({
  name: String,
  password: String,
});

async function main() {
  const password = process.env.MONGODB_PASSWORD;
  await mongoose.connect(`mongodb+srv://Alaa1:yEszVzboZEnwamwT@cluster0.es9yf.mongodb.net/priviteProjectDatabase?retryWrites=true&w=majority`);
}

const User = mongoose.model('appointment', userSchema);
const event = new User({ name: 'asma', password:"123" });
console.log(event.name);
event.save();


const userRouter=require('./Controller/userRouter')
app.use("/users",userRouter);


db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("connected to DB!");
});
// app.use("/product",products);
app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

