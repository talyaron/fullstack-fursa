var express = require('express');
var app = express();
var port = 4000;
app.use(express.static('client/public'));
app.listen(port, function () {
    console.log("Example app listening on port " + port);
});
