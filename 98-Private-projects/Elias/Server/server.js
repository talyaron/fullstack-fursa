const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')

const mongoose = require('mongoose');
require('dotenv').config();

const password = process.env.MONGODB_PASSWORD;

const app = express();
app.use(cors()) // Use this after the variable declaration
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./routes/routes.js')(app, fs);

const db = mongoose.connection;


main().catch(err => console.log(err));

async function main() {
  const password = process.env.MONGODB_PASSWORD;
  await mongoose.connect(`mongodb+srv://eliasrenawi:${password}@cluster0.yp2sn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
}


db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("connected to DB!");
});

// const mysql = require('mysql');

// const con_mysql = mysql.createConnection({
//   host: "localhost",
//   port: "3306",
//   user: "root",
//   password: "123456"


//   // ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '12345678'
// });

// con_mysql.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected to MySQL DataBase");
// });
// //module.exports=con_mysql;


// app.get('./get-cats', function (req, res) {

//   try {
//     con_mysql.query("SELECT * FROM cat_s.cats where age<5;", function (err, result, fields) {
//       if (err) throw err;
//       res.send(result);
//     });
//   } catch (err) {
//     console.error(err)

//   }

// });



// const kittySchema = new mongoose.Schema({
//     name: String,
//     address:{
//         city:String
//       }
// });

//the collection

// const Kitten = mongoose.model('Kitten', kittySchema);

// const mitzy = new Kitten({
//     name: "Mitzy3",
//     address: {
//       city:"Um al fahm",
//       street:"Jaberin"
//     },
//   });
// console.log(mitzy.name);

//mitzy.save().then(res => { console.log(res) });


// async function getKitens() {
//     const kittens = await Kitten.find({address:{city:'Um al fahm'} });
//     console.log(kittens);
//   }

//   getKitens();


const server = app.listen(3001, () => {
  console.log('listening on port %s...', server.address().port);
});