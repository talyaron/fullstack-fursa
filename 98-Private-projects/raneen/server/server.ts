import express from 'express';
const app = express();
const port = 4000;
require('dotenv').config();

app.use(express.static('../client/build'));

app.get('/get-user',(req, res)=>{
    console.log('user-request')
    res.status(202).send({name:"Mohamad", id:123})
})

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}

const kittySchema = new mongoose.Schema({
  name: String
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});