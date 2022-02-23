var express = require('express');
var app = express();
var port = 3000;
console.log('Hi all 2tre');
var x = 6;
console.log(x * 4);
//console.log(process.env.USER);
app.use(express.static('public'));
app.get('/', function (req, res) {
    console.log(req);
    res.send('Hello World! all');
});
app.listen(port, function () {
    console.log("Example app listening on port " + port);
});
