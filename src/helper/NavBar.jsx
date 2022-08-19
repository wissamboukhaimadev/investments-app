import { AppBar, Toolbar } from '@mui/material';
import React from 'react';
import logoImage from '../assets/logo.png';

export default function NavBar() {
  return (
    <>
      <AppBar>
        <Toolbar className="flex justify-center ">
          <img src={logoImage} alt="logo" />
        </Toolbar>
      </AppBar>
    </>
  );
}
