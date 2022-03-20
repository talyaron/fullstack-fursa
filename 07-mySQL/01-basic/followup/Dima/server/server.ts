const cookieParser = require('cookie-parser'); 
const mysql = require('mysql');
const express = require("express");
const app = express();
const port = 4001;
require("dotenv").config();

//routes for data

//static files
app.use(express.json());
app.use(cookieParser());
app.use(express.static("client/build"));

//data
export const con = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "123456789"


  // ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '12345678'
});

con.connect( (err)=> {
  if (err) throw err;
  console.log("Connected!");
  // con.query("use test", (err, result, fields) => {
  //     if (err) throw err;
  //     console.log('Using test');

  // });
});

//routes
import uesrRouter from './routes/userRoute';
app.use('/users',uesrRouter)

app.post('/add-new-cat',async (req, res) => {
  const {name} = req.body;
  try {
    const sql = `INSERT INTO cats.cats (cat_name) VALUES ('${name}')`;
    con.query(sql, function (err, result) {
      if(err) throw err;
      console.log('record inserted');
    })
  } catch (error) {
    
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
