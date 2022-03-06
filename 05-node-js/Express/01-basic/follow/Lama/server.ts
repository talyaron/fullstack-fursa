import express from 'express';
const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });
app.use(express.static('public'))
app.get('/get-user',(req,res)=>{
    console.log('user-request')
    res.send({name:"Lama",id:123})
})

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});