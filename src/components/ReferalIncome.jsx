import React, { useState, useEffect } from 'react';

import {
  AppBar,
  Backdrop,
  CircularProgress,
  Toolbar,
  Typography,
} from '@mui/material';

import axios from 'axios';

import { Navigate } from 'react-router-dom';

export default function ReferalIncome() {
  const [referral, setReferral] = useState({});
  const [fetching, setFetching] = useState(true);

  const userId = localStorage.getItem('login');

  useEffect(() => {
    if (userId) {
      axios
        .get(`https://transactionappcli.herokuapp.com/api/v1/users/${userId}`)
        .then((res) => {
          setReferral(res.data[0]);
          setFetching(false);
        })
        .catch((err) => console.error(err));
    }
  }, [userId]);

  return (
    <div>
      <AppBar sx={{ position: 'sticky' }}>
        <Toolbar className="flex justify-center">
          <Typography>Referral Income</Typography>
        </Toolbar>
      </AppBar>
      {!userId && <Navigate to="/" />}
      <section className="returned flex" style={{ background: '#036373' }}>
        <div
          className="grow flex justify-center items-center flex-col p-10 "
          style={{ borderRight: '3px solid #f7bd00' }}
        >
          <Typography>Total Income</Typography>
          <Typography sx={{ color: '#f7bd00' }}>
            ₦ {referral.referralnum}{' '}
          </Typography>
        </div>
        {/* <div className="grow flex justify-center items-center flex-col p-10">
          <Typography>Today's Income</Typography>
          <Typography sx={{ color: '#f7bd00' }}>₦50</Typography>
        </div> */}
      </section>

      {fetching && (
        <Backdrop open={true}>
          {' '}
          <CircularProgress />{' '}
        </Backdrop>
      )}

      <div className="pt-20 text-center">
        <Typography>
          Number of Referral:{' '}
          <span style={{ color: '#f7bd00' }}> {referral.referralnum} </span>{' '}
        </Typography>
      </div>
    </div>
  );
}
