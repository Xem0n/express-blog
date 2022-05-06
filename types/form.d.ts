import { Request } from 'express';

interface IFormBody {
    email?: string;
    password?: string;
}

interface IFormRequest extends Request {
    body: IFormBody;
}

export default IFormRequest;