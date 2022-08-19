import {
  FormControl,
  TextField,
  Button,
  Typography,
  AppBar,
  Toolbar,
  Backdrop,
  CircularProgress,
} from '@mui/material';
import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { Navigate } from 'react-router-dom';

export default function PersonalInfo() {
  const [userData, setUserData] = useState({});
  const [fetching, setFectching] = useState(true);

  const userId = localStorage.getItem('login');

  useEffect(() => {
    if (userId) {
      axios
        .get(`https://transactionappcli.herokuapp.com/api/v1/users/${userId}`)
        .then((res) => {
          setUserData(res.data[0]);
          setFectching(false);
        })
        .catch((err) => console.error(err));
    }
  }, [userId]);

  return (
    <>
      <AppBar sx={{ position: 'sticky' }}>
        <Toolbar className="flex justify-center">
          <Typography>Personal Information</Typography>
        </Toolbar>
      </AppBar>
      {!userId && <Navigate to="/" />}
      {fetching && (
        <Backdrop open={true}>
          {' '}
          <CircularProgress />{' '}
        </Backdrop>
      )}
      <div className="flex justify-center items-center px-20 min-h-screen">
        <FormControl fullWidth>
          <TextField
            sx={{ marginBottom: 5 }}
            label="username"
            value={userData?.username}
            disabled
          />
          <TextField
            sx={{ marginBottom: 5 }}
            label="Phone Number"
            value={userData?.phone}
            disabled
          />
          <Button
            className="hover:hover:bg-amber-500"
            variant="contained"
            sx={{ background: '#f7bd00' }}
            type="submit"
          >
            Save Info
          </Button>
        </FormControl>
      </div>
    </>
  );
}
