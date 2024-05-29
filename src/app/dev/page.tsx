// ** React Imports
import React from 'react';

// ** Next Imports
import { NextPage } from 'next';
import { redirect } from 'next/navigation';

// ** MUI Imports
import { Stack, Typography } from '@mui/material';

// ** Components Imports
import DemoAppAlert from './components/DemoAppAlerts';
import DemoAppButton from './components/DemoAppButton';
import DemoAppIcon from './components/DemoAppIcon';
import DemoAppIconButton from './components/DemoAppIconButton';
import DemoAppImage from './components/DemoAppImage';

// ** Config imports
import { IS_DEBUG } from '@/config';

/**
 * Renders Development tools when env.NEXT_PUBLIC_DEBUG is true
 * @page Dev
 */
const DevPage: NextPage = () => {
  if (!IS_DEBUG) {
    redirect('/');
  }

  return (
    <Stack spacing={2} padding={2}>
      <Stack>
        <Typography variant="h3">DevTools page</Typography>
        <Typography variant="body1">This page is not visible on production.</Typography>
      </Stack>

      <Stack alignItems="center" spacing={1}>
        {/* <DemoAppIcon /> */}
        <DemoAppIconButton />
        <DemoAppImage />
        <DemoAppAlert />
        <DemoAppButton />
      </Stack>
    </Stack>
  );
};

export default DevPage;
