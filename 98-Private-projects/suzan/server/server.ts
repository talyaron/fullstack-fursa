import express from 'express';
import { connect } from 'http2';
const app = express();
const port = 4000;
const mysql = require('mysql');

require('dotenv').config();

app.use(express.static('../client/build'));
app.use(express.json());

// app.get('/get-user' , (req, res) => {
//   console.log('user-request')
//   res.status(202).send({name:'suzan', id:12345})
// })

//MYSQL

export const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "123456789"
});

connection.connect( (err) => {
  if (err) throw err;
  console.log("connected to SQL");
})

//mongoose
const mongoose = require("mongoose");

async function main() {
  const password = process.env.MONGODB_PASSWORD;
  await mongoose.connect(
    `mongodb+srv://Suzan:${password}@cluster0.skxqu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  );
}

main().catch((err) => console.log(err));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("connected to DB!");
});

//Routes
const classesRoute = require('./routes/school/ClassesRoutes')
app.use('/school', classesRoute);

const teachersRoute = require('./routes/school/TeachersRoutes')
app.use('/school', teachersRoute);

const studentsRoute = require('./routes/school/StudentsRoutes')
app.use('/school', studentsRoute);

const coursesRoute = require('./routes/school/CoursesRoutes')
app.use('/school', coursesRoute);

const userRoute = require('./routes/user/UserRoutes')
app.use('/user', userRoute);


//server listening
app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
