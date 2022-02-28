import express from 'express';
const app = express();
const port = 4000;

app.use(express.static('../Client/build'));
app.use(express.json());
app.get("/", (req,res)=>{
    res.send("hello")
})

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});