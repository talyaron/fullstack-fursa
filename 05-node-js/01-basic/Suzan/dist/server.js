var express = require('express');
var app = express();
var port = 3000;
///
app.use(express.static('public'));
app.get('/all', function (req, res) {
    console.log(req);
    res.send('Hello World! all');
});
app.listen(port, function () {
    console.log("Example app listening on port " + port);
});
