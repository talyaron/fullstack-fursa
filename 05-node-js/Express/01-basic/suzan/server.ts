import express from 'express';
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/get-user' , (req, res) => {
  console.log('user-request')
  res.status(202).send({name:'suzan', id:12345})
})

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});