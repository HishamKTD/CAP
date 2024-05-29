// ** React Imports
import React from 'react';

// ** Next Imports
import { Metadata } from 'next';

// ** Components Imports
import LoginPage from '@/app/auth/login/page';
import { APP_DESCRIPTION, APP_TITLE } from '@/constants';

export const metadata: Metadata = {
  title: `Sign-up - ${APP_TITLE}`,
  description: APP_DESCRIPTION,
};

export default LoginPage;
