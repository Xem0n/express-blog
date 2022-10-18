import type { NextPage } from 'next';
import Form from '../../components/form';

const Login: NextPage = () => (
  <Form
    title='Sign into your account!'
    submitText='Log In'>
      <input 
        type="email" 
        name="email"
        placeholder='Input your email' />

      <input 
        type="password" 
        name="password" 
        placeholder='Input your password'/>
  </Form>
);

export default Login;