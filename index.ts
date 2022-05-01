// todo:
// add .env support
// setup db (mariadb maybe)
// add template engine

import express from 'express';
import path from 'path';
import index from './routes/index';

const app = express();
const PORT = 8000;

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', './views');
app.set('view engine', 'pug');

app.use('/', index);

app.listen(PORT, () => {
    console.log(`server is runnig at port: ${PORT}`);
});