declare function require(name: string);

const express = require('express');
const app = express();
const port = 4000;

app.use(express.static('client/public'));
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
