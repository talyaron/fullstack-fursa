const express = require('express');
const app = express();
const port = 4000;
// app.use(express.static('client/build'));
app.get('/get-all-students', (req, res) => {
    const students = [
        { info: { firstName: 'Suzan', lastName: 'Kassabry', father: 'Emad', mother: 'Linda', id: '208856374', phone: '0537756048', fphone: '0537756048', mphone: '0537756048', email: 'suzankassabry97@gmail.com' } },
        { info: { firstName: 'Maria', lastName: 'Kassabry', father: 'Emad', mother: 'Linda', id: '645297463', phone: '0537756048', fphone: '0537756048', mphone: '0537756048', email: 'suzankassabry97@gmail.com' } },
        { info: { firstName: 'Nora', lastName: 'Kassabry', father: 'Emad', mother: 'Linda', id: '659304743', phone: '0537756048', fphone: '0537756048', mphone: '0537756048', email: 'suzankassabry97@gmail.com' } }
    ];
    res.send(students);
});
app.use(express.static('client/build'));
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
