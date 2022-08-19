import {
  AppBar,
  Backdrop,
  CircularProgress,
  Toolbar,
  Typography,
} from '@mui/material';
import { Container } from '@mui/system';
import React, { useState, useEffect } from 'react';

import axios from 'axios';
//components
import CardTransactions from '../helper/CardTransactions';
import { BottomNavigationBar } from '../helper';
import { Navigate } from 'react-router-dom';

export default function Transactions() {
  const [orders, setOrders] = useState([]);
  const [dailyInco, setDailyIncome] = useState(0);
  const [fetching, setFetching] = useState(true);

  const userId = localStorage.getItem('login');

  useEffect(() => {
    if (userId) {
      axios
        .get('https://transactionappcli.herokuapp.com/api/v1/orders')
        .then((res) => {
          let currentData = res.data;
          currentData = currentData.filter((val) => val.userId === userId);
          setOrders(currentData);
          setFetching(false);
          currentData.map((item) => {
            setDailyIncome((prev) => prev + item.dailyIncome);
          });
        })
        .catch((err) => console.error(err));
      axios
        .get('https://transactionappcli.herokuapp.com/api/v1/orders')
        .then((res) => {
          let currentData = res.data;
          currentData = currentData.filter((val) => val.userId === userId);
          setOrders(currentData);
          setFetching(false);
          currentData.map((item) => {
            setDailyIncome((prev) => prev + item.dailyIncome);
          });
        })
        .catch((err) => console.error(err));
    }
  }, [userId]);

  return (
    <div>
      <AppBar sx={{ position: 'sticky' }}>
        <Toolbar className="flex justify-center">
          <Typography>Orders</Typography>
        </Toolbar>
      </AppBar>
      {!userId && <Navigate to="/" />}
      {fetching && (
        <Backdrop open={true}>
          {' '}
          <CircularProgress />{' '}
        </Backdrop>
      )}

      <section className="returned flex" style={{ background: '#036373' }}>
        {/* <div
          className="grow flex justify-center items-center flex-col p-10 "
          style={{ borderRight: '3px solid #f7bd00' }}
        >
          <Typography>Already Returned</Typography>
          <Typography sx={{ color: '#f7bd00' }}>₦0</Typography>
        </div> */}
        <div className="grow flex justify-center items-center flex-col p-10">
          <Typography>Present Daily Income</Typography>
          <Typography sx={{ color: '#f7bd00' }}>₦{dailyInco}</Typography>
        </div>
      </section>

      <Container className="pt-5">
        {orders?.map((item, index) => {
          return <CardTransactions key={index} item={item} />;
        })}
      </Container>

      <BottomNavigationBar page={1} />
    </div>
  );
}
