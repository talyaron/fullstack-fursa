declare function require(name:string);

const express = require('express');
const app = express();
const port = 4000;




app.get('/get-wood-type', (req, res) => {
  const woods = [{type:'pine wood', height:70,width:70,thick:70}, {type:'insulation', height:70,width:70,thick:70},{type:'multyLayer', height:70,width:70,thick:70}];

  res.send(woods)
})


//console.log(process.env.USER);
app.use(express.static('client/build'));
app.get('/',(req,res)=>{
    console.log(req);
    res.send('Hello World! all');
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  