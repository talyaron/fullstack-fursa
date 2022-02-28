import express from 'express';
const app = express();
const port = 4000;

app.use(express.static('../client/build'));

app.get('/get-user',(req, res)=>{
    console.log('user-request')
    res.status(202).send({name:"Mohamad", id:123})
})

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});