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
let users = [
    { "login": "admin", "password": "admin" }
];
let Token = "8743b52063cd84097a65d1633f5c74f5";
let wrongToken = "";

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

app.get('/login', (req, res, next) => {
    const { login, password } = req.query;
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    if (users.find(user => user.login === login && user.password === password)) {
        console.log("user logged in");
        res.json(Token);
    }
    else {
        console.log("wrong credentials");
        res.json({wrongToken})
    }
})

app.get('/register', (req, res, next) => {
    const { login, password } = req.query;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    if (users.find(user => user.login === login)) {
        console.log("user already exists");
        res.json({ message: "User already exists." });
    }
    else {
        users.push({ login, password });
        console.log("user created");
        res.json({ message: "User created." });
    }
})

// app.post('/register', (req, res, next) => {
//     // const { login, password } = req.body;
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', '*');
//     if (users.find(user => user.login === login)) {
//         res.json({ message: "User already exists." });
//     }
//     else {
//         users.push({ login, password });
//         res.json({ message: "User created." });
//     }
//     res.json({ message: "User created." });
// })