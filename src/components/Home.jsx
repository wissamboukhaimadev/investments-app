import { Avatar, Backdrop, CircularProgress, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { BottomNavigationBar, InvestList, NavBar, Slides } from '../helper';
import { Container } from '@mui/system';

import { useNavigate, Navigate } from 'react-router-dom';
import axios from 'axios';

//icons
import GroupIcon from '@mui/icons-material/Group';
import InfoIcon from '@mui/icons-material/Info';
import CopyrightIcon from '@mui/icons-material/Copyright';

export default function Home() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [fetching, setFetching] = useState(true);

  const userId = localStorage.getItem('login');

  const handlBalance = () => {
    navigate('/withdraw');
  };
  const handleRefferal = () => {
    navigate('/referalprogram');
  };
  const handleAbouUs = () => {
    navigate('/aboutus');
  };

  useEffect(() => {
    if (userId) {
      axios
        .get(`https://transactionappcli.herokuapp.com/api/v1/users/${userId}`)
        .then((res) => {
          setUserData(res.data[0]);
          setFetching(false);
        })
        .catch((err) => console.log(err));
    }
  }, [userId]);
  return (
    <div>
      {!userId && <Navigate to="/" />}
      {fetching && (
        <Backdrop open={true}>
          {' '}
          <CircularProgress />{' '}
        </Backdrop>
      )}
      <NavBar />

      <Slides />

      <section className="balanced flex mt-10 ">
        <div
          className="grow p-10 ml-5 flex justify-center items-center rounded-xl cursor-pointer"
          style={{ background: '#F9BD00' }}
          onClick={handlBalance}
        >
          <Typography variant="h3">
            <span style={{ color: '#515354' }}>My Balance</span> :{' '}
            {userData?.balance} $
          </Typography>
        </div>
        <div className="grow p-5 ">
          <div
            className="relative referalProgram p-5 rounded-xl cursor-pointer"
            style={{ background: '#F9BD00' }}
            onClick={handleRefferal}
          >
            <Typography sx={{ color: '#515354' }}>Referal Program</Typography>
            <div className="absolute right-10 top-3">
              <Avatar sx={{ background: 'transparent' }}>
                <GroupIcon />
              </Avatar>
            </div>
          </div>
          <div
            className="relative referalProgram p-5 rounded-xl cursor-pointer mt-5"
            style={{ background: '#F9BD00' }}
            onClick={handleAbouUs}
          >
            <Typography sx={{ color: '#515354' }}>About Us</Typography>
            <div className="absolute right-10 top-3">
              <Avatar sx={{ background: 'transparent' }}>
                <InfoIcon />
              </Avatar>
            </div>
          </div>
        </div>
      </section>

      <Container className="mainContent mt-20">
        <div className="flex">
          <span style={{ border: '1px solid #F9BD00' }}></span>
          <Typography className="font-bold pl-5" sx={{ color: '#F9BD00' }}>
            Standard
          </Typography>
        </div>
        <p className="pl-20">
          Choose the plan that best aligns with your financial goals. Click on
          the image below to view more details.
        </p>
        <InvestList />
      </Container>

      <footer className="text-center mt-10">
        {' '}
        <CopyrightIcon /> Copyright {2022}{' '}
      </footer>
      <BottomNavigationBar page={0} />
    </div>
  );
}
