// ** React Imports
import React from 'react';

// ** Next Imports
import { Metadata } from 'next';

// ** Components Imports
import LoginPage from '@/app/auth/login/page';
import { _DESCRIPTION_, _TITLE_ } from '@/constants';

export const metadata: Metadata = {
  title: `Sign-up - ${_TITLE_}`,
  description: _DESCRIPTION_,
};

export default LoginPage;
