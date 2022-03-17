import express from 'express';
import { connect } from 'http2';
const app = express();
const port = 4000;
const mysql = require('mysql');

require('dotenv').config();

app.use(express.static('../client/build'));
app.use(express.json());

app.get('/get-user' , (req, res) => {
  console.log('user-request')
  res.status(202).send({name:'suzan', id:12345})
})

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



// app.get('/get-classes', async (req, res) => {
//   console.log('get classes - server');
//   try{
//     const response = await axios.get('http://localhost:3004/schoolClasses');
//     const data = response.data;
//     console.log(data);
//     res.status(200).send(data);
//   }
//   catch (error) {
//     console.info(error)
//     res.send({error})
//   }

// })

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

const classesRoute = require('./routes/school/ClassesRoutes')
const teachersRoute = require('./routes/school/TeachersRoutes')
const studentsRoute = require('./routes/school/StudentsRoutes')
const coursesRoute = require('./routes/school/CoursesRoutes')
app.use('/school', classesRoute);
app.use('/school', teachersRoute);
app.use('/school', studentsRoute);
app.use('/school', coursesRoute);


//the collection
// const SchoolClassSchema = new mongoose.Schema({
//   name:String,
//   teacher: String,
// });

// const SchoolClass = mongoose.model("schoolClasses", SchoolClassSchema);

// const schoolClass = new SchoolClass({
//   className: "class 4B",
//   teacherName: "Suzan Kassabry",
// });

// console.log(schoolClass.className)

// schoolClass.save().then(res => {console.log(res)}).catch(err=>console.log(err));

// async function getSchoolClasses(): Promise<any> {
//   try {
//     const schoolClasses = await SchoolClass.find({});
//     // console.log("in getSchoolClasses")
//     // console.log(schoolClasses);
//     return schoolClasses;
//   } catch (err: any) {
//     console.error(err);
//     return false;
//   }
// }

// // getSchoolClasses();

// app.get('/get-classes', async(req, res) => {
//   const classes = await getSchoolClasses();
//   res.send(classes);
// })

// app.post('/add-class',async (req, res) => {
//   try{
//     const {name, teacher} = req.body;
//     console.log(name)
//     console.log(teacher)
//     if (!name || !teacher) throw new Error("No data!");
//     const newClass = new SchoolClass({
//       name: name,
//       teacher: teacher,
//     });
//     await newClass.save().then((res) => {
//       console.log(res);
//     });
//     res.send({val: "OK"});
//   } catch (err) {
//     res.send({error: err.message});
//   }
// })

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
