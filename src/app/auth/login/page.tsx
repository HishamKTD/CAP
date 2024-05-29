// ** React Imports
import React from 'react';

// ** Next Imports
import { Metadata, NextPage } from 'next';

// ** Components Imports
import LoginForm from './LoginForm';

// ** Constants imports
import { APP_DESCRIPTION, APP_TITLE } from '@/constants';

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
  title: `Login - ${APP_TITLE}`,
  description: APP_DESCRIPTION,
};

export default LoginPage;
