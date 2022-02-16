declare function require(name:string);

const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/get-users', (req, res) => {
  const users = [{name: "a", age: 10}, {name: "b", age: 20}];
  res.send(users);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})