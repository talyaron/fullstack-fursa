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
app.get('/get-all-users', (req, res) => {
    const users = [
        {
            id: 1,
            title: 'Fancy Product',
            price: '40',
            rating: 4,
            cart: false
        },
        {
            id: 2,
            title: 'Sport Product',
            price: '480',
            rating: 3,
            cart: false
        },
        {
            id: 3,
            title: 'Sale Item',
            price: '30',
            rating: 2,
            cart: false
        },
        {
            id: 4,
            title: 'Popular Product',
            price: '490',
            rating: 5,
            cart: false
        },
        {
            id: 5,
            title: 'Fancy Product',
            price: '40',
            rating: 3,
            cart: false
        },
        {
            id: 6,
            title: 'Sport Product',
            price: '480',
            rating: 2,
            cart: false
        },
        {
            id: 7,
            title: 'Sale Item',
            price: '30',
            rating: 4,
            cart: false
        },
        {
            id: 8,
            title: 'Popular Product',
            price: '490',
            rating: 3.5,
            cart: false
        },
        {
            id: 9,
            title: 'Fancy Product',
            price: '40',
            rating: 2.5,
            cart: false
        },
        {
            id: 10,
            title: 'Sport Product',
            price: '480',
            rating: 1,
            cart: false
        },
        {
            id: 11,
            title: 'Sale Item',
            price: '30',
            rating: 3,
            cart: false
        },
        {
            id: 12,
            title: 'Popular Product',
            price: '490',
            rating: 5,
            cart: false
        }
    
    ];
  
    res.send(users)
  })
