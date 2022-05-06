import { Request } from 'express';
import { Session } from 'express-session';
import User from '../models/user';

interface ISession extends Session {
    user?: User;
}

interface ISessionRequest extends Request {
    session: ISession;
}

export default ISessionRequest;