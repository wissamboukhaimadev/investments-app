import React, { useState, useEffect } from 'react';
import {
  Button,
  Typography,
  AppBar,
  Toolbar,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  FormControl,
  Backdrop,
  CircularProgress,
} from '@mui/material';

import axios from 'axios';
import { Navigate } from 'react-router-dom';

export default function Wihdraw() {
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState(0);
  const [bankInfo, setBankInfo] = useState({});
  const [userInfo, setUserInfo] = useState({});

  const [someLoading, setSomeLoading] = useState(true);
  const userId = localStorage.getItem('login');

  const validButton =
    Boolean(amount >= 100) &&
    Boolean(bankInfo._id) &&
    Boolean(userInfo.balance);

  const handleOpenDialog = () => {
    if (amount > 100 && amount < userInfo.balance) {
      axios
        .post('https://transactionappcli.herokuapp.com/api/v1/withdraws/addWithdraw', {
          amount,
          bankId: bankInfo._id,
          userId,
        })
        .then((res) => {
          setOpen(true);
        });
    } else {
      alert('Your balance is less than this price');
    }
  };

  useEffect(() => {
    if (userId) {
      axios
        .get(`https://transactionappcli.herokuapp.com/api/v1/banks/byuser/${userId}`)
        .then((res) => {
          setBankInfo(res.data[0]);
          setSomeLoading(false);
        })
        .catch((err) => console.error(err));
    }
  }, [userId]);
  useEffect(() => {
    if (userId) {
      axios
        .get(`https://transactionappcli.herokuapp.com/api/v1/users/${userId}`)
        .then((res) => {
          console.log(res.data[0]);
          setUserInfo(res.data[0]);
          setSomeLoading(false);
        })
        .catch((err) => console.error(err));
    }
  }, [userId]);

  return (
    <div>
      <AppBar sx={{ position: 'sticky' }}>
        <Toolbar className="flex justify-center">
          <Typography>Withdraw</Typography>
        </Toolbar>
      </AppBar>
      {!userId && <Navigate to="/" />}
      <section className="returned flex" style={{ background: '#036373' }}>
        {/* <div
          className="grow flex justify-center items-center flex-col p-10 "
          style={{ borderRight: '3px solid #f7bd00' }}
        >
          <Typography>Withdrawn Balance</Typography>
          <Typography sx={{ color: '#f7bd00' }}>₦0</Typography>
        </div> */}
        <div className="grow flex justify-center items-center flex-col p-10">
          <Typography>Withdrawable Balance</Typography>
          <Typography sx={{ color: '#f7bd00' }}>
            ₦{userInfo?.balance}
          </Typography>
        </div>
      </section>

      {amount < 100 && (
        <div className="text-center">You can't withdraw less than 100</div>
      )}
      {someLoading && (
        <Backdrop open={true}>
          {' '}
          <CircularProgress />{' '}
        </Backdrop>
      )}
      <Container className="mt-20">
        <FormControl fullWidth>
          <TextField
            label="amount"
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />
        </FormControl>
        <div style={{ height: 20 }} />
        <Button
          fullWidth
          className="hover:hover:bg-amber-500"
          variant="contained"
          sx={{ background: '#f7bd00', fontWeight: 'bold' }}
          type="submit"
          onClick={handleOpenDialog}
          disabled={!validButton}
        >
          Withdraw
        </Button>
        <OpenWithdrawDialog open={open} setOpen={setOpen} />
      </Container>
    </div>
  );
}

const OpenWithdrawDialog = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Withdraw</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          The Withdraw Action Will Be 3 Days Long
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};
