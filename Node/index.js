
const express = require('express');
const app = express();

const hostname = '127.0.0.1'; // o localhost
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
    //console.log(__dirname)
    //res.sendFile(__dirname + '');
});

app.get('/index', (req, res) => {
    res.redirect('/');
});

app.get('/login', (req, res) => {
    res.send('PROCESANDO LOGIN...');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});