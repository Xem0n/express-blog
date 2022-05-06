import express, { Request } from 'express';
import {} from '../types/session';

const router = express.Router();

const safeUrls = [
    '/login',
    '/register'
];

const authenticate = (req: Request): boolean => {
    if (safeUrls.includes(req.url)) {
        return true;
    }

    return req.session.user !== null && req.session.user !== undefined;
};

router.use('/', (req, res, next) => {
    if (!authenticate(req)) {
        return res.redirect('/admin/login');
    }

    next();
});

router.get('/', (req, res) => {
    res.render('admin/index');
});

router.get('/login', (req, res) => {
    res.send('login');
});

export default router;