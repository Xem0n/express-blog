import express from 'express';
import IFormRequest from '../types/form';
import ISessionRequest from '../types/session';

const router = express.Router();

router.use(express.urlencoded({ extended: true }));

const safeUrls = [
    '/login',
    '/register'
];

const authenticate = (req: ISessionRequest): boolean => {
    if (safeUrls.includes(req.url)) {
        return true;
    }

    return req.session.user !== null && req.session.user !== undefined;
};

router.use((req, res, next) => {
    if (!authenticate(req)) {
        return res.redirect('/admin/login');
    }

    next();
});

router.get('/', (req, res) => {
    res.render('admin/index');
});

router.get('/login', (req, res) => {
    res.render('admin/login');
});

router.post('/login', (req: IFormRequest, res) => {
    res.send('process form data...');
});

router.get('/register', (req, res) => {
    res.render('admin/register');
});

export default router;