import express from 'express';
const cookieParser = require('cookie-parser')
const app = express();
const port = 4001;

app.use(cookieParser());
app.use(express.static('../Client/build'));
app.use(express.json());
app.get("/", (req,res)=>{
    res.cookie("cookies",{name:'alaa'})
    res.send("hello")
})

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});