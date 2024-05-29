// ** React Imports
import React from 'react';

// ** Next Imports
import { Metadata, NextPage } from 'next';

// ** Components Imports
import LoginForm from './LoginForm';

// ** Constants imports
import { _DESCRIPTION_, _TITLE_ } from '@/constants';

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
  title: `Login - ${_TITLE_}`,
  description: _DESCRIPTION_,
};

export default LoginPage;
