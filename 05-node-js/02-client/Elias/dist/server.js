//declare function require(name: string);
var path = require("path");
var express = require('express');
var app = express();
var port = 4000;
var dirPath = path.join(__dirname, '../project/build');
console.log(dirPath);
app.use(express.static(dirPath));
app.listen(port, function () {
    console.log("Example app listening on port " + port);
});
