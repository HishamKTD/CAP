// ** React imports
import React from 'react';

// ** Next imports
import { Metadata, NextPage } from 'next';

// ** MUI imports
import { Stack, Typography } from '@mui/material';

// ** Components imports
import { AppLink } from '@/components';
import DemoAppAlert from '../dev/components/DemoAppAlerts';
import DemoAppButton from '../dev/components/DemoAppButton';
import DemoAppIcon from '../dev/components/DemoAppIcon';
import DemoAppIconButton from '../dev/components/DemoAppIconButton';
import DemoAppImage from '../dev/components/DemoAppImage';

// ** Constants imports
import { APP_DESCRIPTION, APP_TITLE } from '@/constants';

export const metadata: Metadata = {
  title: APP_TITLE,
  description: APP_DESCRIPTION,
};

/**
 * Main page of the Application
 * @page Home
 */
const Home: NextPage = () => {
  return (
    <Stack spacing={2} padding={2}>
      <Stack>
        <Typography variant="h3">About application</Typography>
        <Typography variant="body1">
          This application is a mix of{' '}
          <AppLink href="https://nextjs.org/docs/api-reference/create-next-app">Create Next App</AppLink> and{' '}
          <AppLink href="https://mui.com/">MUI</AppLink> with set of reusable components and utilities to build
          professional <AppLink href="https://nextjs.org/">NextJS</AppLink> application faster.
        </Typography>
      </Stack>

      <Stack alignItems="center" spacing={1}>
        <DemoAppAlert />
        <DemoAppButton />
        <DemoAppIcon />
        <DemoAppIconButton />
        <DemoAppImage />
      </Stack>
    </Stack>
  );
};

export default Home;
