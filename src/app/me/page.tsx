// ** React Imports
import React from 'react';

// ** Next imports
import { NextPage } from 'next';

// ** Mui Imports
import { Stack } from '@mui/material';

// ** Components Imports
import { AppAlert, UserInfo } from '../../components';

/**
 * Renders User Profile Page
 * @page Me
 */
const MeAkaProfilePage: NextPage = () => {
  return (
    <Stack spacing={2} padding={2}>
      <AppAlert severity="warning">This page is under construction</AppAlert>
      <UserInfo showAvatar />
    </Stack>
  );
};

export default MeAkaProfilePage;
