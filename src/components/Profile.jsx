import {
  AppBar,
  Toolbar,
  Typography,
  Backdrop,
  CircularProgress,
} from '@mui/material';
import React, { useState, useEffect } from 'react';

import logoImage from '../assets/logo.png';
import { useNavigate, Navigate } from 'react-router-dom';

import axios from 'axios';

//components
import { BottomNavigationBar } from '../helper';
import ProfileData from '../helper/ProfileData';

export default function Profile() {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({});
  const [orderLength, setOrderLength] = useState(0);
  const [fetching, setFetching] = useState(true);

  const userId = localStorage.getItem('login');

  const handleInvestements = () => {
    navigate('/investements');
  };
  const handleReferralLocation = () => {
    navigate('/referalprogram');
  };
  const handleBalanceAvailable = () => {
    navigate('/withdraw');
  };

  useEffect(() => {
    if (userId) {
      axios
        .get(`https://transactionappcli.herokuapp.com/api/v1/users/${userId}`)
        .then((res) => {
          setUserInfo(res.data[0]);
          setFetching(false);
        })
        .catch((err) => console.error(err));
    }
  }, [userId]);
  useEffect(() => {
    if (userId) {
      axios
        .get(`https://transactionappcli.herokuapp.com/api/v1/orders/byuser/${userId}`)
        .then((res) => {
          setOrderLength(res.data.length);
          setFetching(false);
        })
        .catch((err) => console.error(err));
    }
  }, [userId]);

  return (
    <div>
      <AppBar sx={{ position: 'sticky' }}>
        <Toolbar className="flex justify-center">
          <img src={logoImage} alt="logo" />
        </Toolbar>
      </AppBar>
      {!userId && <Navigate to="/" />}

      {fetching && (
        <Backdrop open={true}>
          {' '}
          <CircularProgress />{' '}
        </Backdrop>
      )}
      <section
        className="flex justify-around p-20 cursor-pointer"
        style={{ background: '#035C6C' }}
      >
        <div onClick={handleInvestements}>
          <Typography>Investemnt</Typography>
          <Typography
            className="text-center"
            sx={{ color: '#E3B309', fontWeight: 'bolder' }}
          >
            {orderLength}
          </Typography>
        </div>
        <div onClick={handleReferralLocation}>
          <Typography>Referal Income</Typography>
          <Typography
            className="text-center"
            sx={{ color: '#E3B309', fontWeight: 'bolder' }}
          >
            N{userInfo.referralnum}
          </Typography>
        </div>
        <div onClick={handleBalanceAvailable}>
          <Typography>Balance Available</Typography>
          <Typography
            className="text-center"
            sx={{ color: '#E3B309', fontWeight: 'bolder' }}
          >
            N{userInfo.balance}
          </Typography>
        </div>
      </section>

      <ProfileData />

      <BottomNavigationBar page={2} />
    </div>
  );
}
