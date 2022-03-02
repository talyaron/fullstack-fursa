// declare function require(name:string);
require('dotenv').config();

import axios from 'axios';
const express = require('express');
const app = express();
const port = 4000;




app.get('/get-wood-type', (req, res) => {
  const woods = [{type:'pine wood', height:70,width:70,thick:70}, {type:'insulation', height:70,width:70,thick:70},{type:'multyLayer', height:70,width:70,thick:70}];

  res.send(woods)
})
app.use(express.static('client/build'));
app.use(express.json());


app.get('/get-orders',async (req,res)=>{
  try {
   const response= await axios.get('http://localhost:3004/userOrder') 
   const {data}=response;
  //  console.log(data)
    res.status(200).send(data)
  } catch (error) {
    console.info(error);
    res.send({ error });
  }
})
app.get('/get-raws',async (req,res)=>{
  try {
   const response= await axios.get('http://localhost:3004/woods') 
   const {data}=response;
  //  console.log(data)
    res.status(200).send(data)
  } catch (error) {
    console.info(error);
    res.send({ error });
  }
})
app.post('/add-orders',(req,res)=>{
  try{
    const {orderObj}=req.body;
    console.log(orderObj)
    if(!orderObj) throw new Error("no order")
    axios.post('http://localhost:3004/userOrder',orderObj)

    res.send({ ok: true });

  }
  catch(error){
    res.send({ error: error.message });

  }

})

app.delete('/delete-order',(req,res)=>{
  try{
  axios.delete(`http://localhost:3004/userOrder`)
  }
  catch(error){
    res.send({ error: error.message });

  }
})

//mongoose
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

const db = mongoose.connection;




async function main() {
  const password=process.env.MONGODB_PASSWORD;
  console.log(password)
  await mongoose.connect(`mongodb+srv://Mona1:${password}@cluster0.qlk4d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
}

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("connected to DB!");
});

const kittySchema = new mongoose.Schema({
  name: String
});

//the collection
const Kitten = mongoose.model('Kitten', kittySchema);

const mitzy = new Kitten({ name: 'Mitzy' });
console.log(mitzy.name);

//console.log(process.env.USER);
app.get('/',(req,res)=>{
    console.log(req);
    res.send('Hello World! all');
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  