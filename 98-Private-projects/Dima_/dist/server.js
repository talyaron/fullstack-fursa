//declare function require(name: string);
const express = require('express');
const app = express();
const port = 4000;
//data
app.get('/get-info', (req, res) => {
    const userInfo = [{ name: "Dima Abbas", phone: "0525041028", email: "dimaabbas25@gmail.com" }];
    res.send(userInfo);
});
app.use(express.static('client/build'));
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
