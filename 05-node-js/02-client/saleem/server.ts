declare function require(name: string);
const path=require("path")
const express = require('express');
const app = express();
const port = 4000;
const dirPath = path.join(__dirname, '../project/build');
console.log(dirPath);
app.use(express.static(dirPath));
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
