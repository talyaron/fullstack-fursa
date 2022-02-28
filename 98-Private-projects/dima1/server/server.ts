import express from 'express';
import axios from 'axios';
const app = express();
const port = 4000;

app.use(express.static('../client/build'));
app.use(express.json());

app.get('/get-user', (req,res) => {
  console.log('user-request')
  res.status(202).send({name:'dima', id:316181734})
})

app.get('/get-select-recipe', async(req, res) => {
  try {
    const response = await axios.get('http://localhost:3004/select/1');
    console.log(response.data)
    const data = response.data;
    res.status(200).send(data);
  } catch (error: any) {
    console.info(error)
    res.send({error})
  }
})

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});