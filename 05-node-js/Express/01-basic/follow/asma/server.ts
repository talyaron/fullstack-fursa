import express from 'express';
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/get-user',(req,res)=>{
  console.log("user request");
  res.status(202).send({name:"asma",id:123})

}
)

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});