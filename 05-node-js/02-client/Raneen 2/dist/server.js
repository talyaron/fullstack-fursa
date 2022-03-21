console.log('hi');
var express = require('express');
var app = express();
var port = 4000;
console.log('hi');
app.use(express.static('client/build'));
app.listen(port, function () {
    console.log("Example app listening on port " + port);
    console.log('hi');
});
