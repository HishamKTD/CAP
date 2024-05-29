'use client';

// ** React imports
import React,{ useState } from 'react';

// ** Third-party imports
import copyToClipboard from 'copy-to-clipboard';

// ** MUI imports
import { Box, Card, CardContent, CardHeader, Snackbar } from '@mui/material';

// ** Components imports
import { AppIconButton } from '@/components';
import { ICONS } from '@/components/common/AppIcon/config';

/**
 * Renders "Demo Section" for AppIcon component
 * @component DemoAppIcon
 */
const DemoAppIcon = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  return (
    <Card>
      <CardHeader title="AppIcon" subheader="A sample of each registered AppIcon. Click to copy the JSX code." />
      <CardContent sx={{ px: 1, py: 0 }}>
        <Box>
          {Object.keys(ICONS).map((icon) => (
            <AppIconButton
              key={icon}
              icon={icon}
              title={icon}
              onClick={() => {
                copyToClipboard(`<AppIcon icon="${icon}" />`);
                setSnackbarOpen(true); // Show snackbar
                setTimeout(() => setSnackbarOpen(false), 10000); // Hide snackbar after small delay
              }}
            />
          ))}
        </Box>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          ContentProps={{
            sx: { display: 'block', textAlign: 'center' },
          }}
          open={snackbarOpen}
          message="JSX code copied to Clipboard"
        />
      </CardContent>
    </Card>
  );
};

export default DemoAppIcon;
