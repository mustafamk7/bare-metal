const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, Docker World!');
});
app.get('/profile', (req, res) => {
    res.send('this is profile page');
});
app.get('/contact', (req, res) => {
    res.send('this is contact page');
});

app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});
