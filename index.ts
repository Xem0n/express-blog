// todo:
// add .env support
// setup db (mariadb maybe)
// add template engine

const express = require('express');

const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
    res.send('yo yo yo');
});

app.listen(PORT, () => {
    console.log(`server is runnig at port: ${PORT}`);
});