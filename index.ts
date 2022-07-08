import 'dotenv/config';
import express from 'express';
import session from 'express-session';
import path from 'path';

import setupDB from './db/setup';

import index from './routes/index';
import admin from './routes/admin';

const app = express();
const port = process.env.PORT ?? 8000;

setupDB();

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', './views');
app.set('view engine', 'pug');
app.locals.basedir = path.join(__dirname, 'views');
app.use(session({
    secret: process.env.SESSION_SECRET ?? 'default',
    resave: false,
    saveUninitialized: false
}));

app.use('/', index);
app.use('/admin', admin);

app.listen(port, () => {
    console.log(`server is running at port: ${port}`);
});