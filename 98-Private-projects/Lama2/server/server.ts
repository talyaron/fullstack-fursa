import { loginStatus } from './controllers/signInController';
import Courses from './model/schema/coursesModel';
import User from './model/schema/userModel';
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const app = express();
const fs = require('fs');
const port = 4007;

app.use(express.json());
//cookies
app.use(cookieParser());
app.use(express.static("client/build"));

const mongoose = require('mongoose');
const internal = require('stream');



main().catch(err => console.log(err));

async function main() {
    const password=process.env.MONGODB_PASSWORD;
    console.log(password)
  await mongoose.connect(`mongodb+srv://Lama:vzDULOmy6x5WxrqL@cluster0.bve7t.mongodb.net/test`);
 // mongodb+srv://Lama:<password>@cluster0.bve7t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
}

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("connected to DB!");
});


  //the collection


    const firstuser = new User({
        firstName: 'lama' ,
        lastName: 'murad' ,
        email:"lamamurad@gmail.com",
        password:"123456",
        phoneNumber:123456123,
       
     });

// async function getCourses(){
//     const course =await Course.find({name:"group course"});
//     const hours =await Course.find({hours:5});
//     console.log(course);
//     console.log(hours)
// }

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/lama',(req:any,res:any)=>{
    res.send("Hi,Lama");
});

const courseRoute = require('./routes/coursesRoute')
app.use('/courses/', courseRoute);

const userRoute = require('./routes/userRoute')
app.use('/user', userRoute);

app.use(loginStatus)
// const routes = require('./routes/routes.js')(app, fs);
// app.use('/courses', routes);

// const server = app.listen(4010, () => {
//     console.log('listening on port %s...', server.address().port);
// });

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
