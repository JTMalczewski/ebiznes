const express = require('express')
const app = express()
const port = 3001
let products = [
    { "name": "apple", "price": 1, "bucket": 0 },
    { "name": "banana", "price": 2, "bucket": 0 },
    { "name": "cherry", "price": 3, "bucket": 0 },
    { "name": "pineapple", "price": 4, "bucket": 0 },
    { "name": "strawberry", "price": 6, "bucket": 0 }
];

app.get('/prod', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    console.log('I send the products.')
    res.json(
        products
    );
});

app.post('/buy', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    console.log('Somebody buy the products!');
})

app.post('/basket', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    console.log('I saved the basket.');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})