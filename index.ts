// todo:
// add .env support
// setup db (mariadb maybe)
// add template engine

import express from 'express';
import index from './routes/index';

const app = express();
const PORT = 8000;

app.get('/', index);

app.listen(PORT, () => {
    console.log(`server is runnig at port: ${PORT}`);
});