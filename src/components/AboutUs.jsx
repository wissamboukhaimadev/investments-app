import React from 'react';

import { Typography, AppBar, Toolbar } from '@mui/material';

export default function AboutUs() {
  return (
    <div>
      <AppBar sx={{ position: 'sticky' }}>
        <Toolbar className="flex justify-center">
          <Typography>About US</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
