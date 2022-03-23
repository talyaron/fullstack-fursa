declare function require(name: string);
console.log('hi');
const express = require('express');
const app = express();
const port = 4000;
console.log('hi');
app.use(express.static('client/build'));
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    console.log('hi');
})
