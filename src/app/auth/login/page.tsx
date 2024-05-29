import { Metadata, NextPage } from 'next';
import LoginForm from './LoginForm';

/**
 * User Login page
 * @page Login
 */
const LoginPage: NextPage = () => {
  return (
    <>
      <LoginForm />
    </>
  );
};

export const metadata: Metadata = {
  title: 'Login - Chat Application',
  description: 'Chat Application Description...',
};

export default LoginPage;
