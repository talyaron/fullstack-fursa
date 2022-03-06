var express = require('express');
var app = express();
var port = 3000;
//static files
app.use(express.static('public'));
//data
app.get('/getadat/all-users', function (req, res) {
    res.send('Hello World!');
});
app.get('/all', function (req, res) {
    console.log(req);
    res.send('Hello World! all');
});
app.listen(port, function () {
    console.log("Example app listening on port " + port);
});
