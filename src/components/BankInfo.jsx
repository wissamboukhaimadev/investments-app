import {
  FormControl,
  TextField,
  Button,
  Typography,
  AppBar,
  Toolbar,
  CircularProgress,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import axios from 'axios';

// accountName:String,
// bankName:String,
// accountNumber:Number,
// userId:String

export default function BankInfo() {
  const navigate = useNavigate();
  const userId = localStorage.getItem('login');
  const [bankInfo, setBankInfo] = useState({
    accountName: '',
    bankName: '',
    accountNumber: '',
    userId: userId,
  });
  const [postFetch, setPostFetch] = useState(false);

  const handleAddBankInfo = () => {
    setPostFetch(true);

    axios
      .get(`https://transactionappcli.herokuapp.com/api/v1/banks/byuser/${userId}`)
      .then((res) => {
        if (res.data.length > 0) {
          axios
            .patch(`https://transactionappcli.herokuapp.com/api/v1/banks/${userId}`, {
              accountName: bankInfo.accountName,
              bankName: bankInfo.bankName,
              accountNumber: bankInfo.accountNumber,
            })
            .then((res) => {
              navigate('/profile');
            })
            .catch((er) => console.error(er));
        } else {
          axios
            .post('https://transactionappcli.herokuapp.com/api/v1/banks/addBank', {
              accountName: bankInfo.accountName,
              bankName: bankInfo.bankName,
              accountNumber: bankInfo.accountNumber,
              userId: userId,
            })
            .then((response) => {
              setPostFetch(false);
              navigate('/profile');
            })
            .catch((errr) => console.error(errr));
        }
        setPostFetch(false);
      });
  };
  useEffect(() => {
    if (userId) {
      axios
        .get(`https://transactionappcli.herokuapp.com/api/v1/banks/${userId}`)
        .then((res) => {
          console.log(res.data);
          setBankInfo(res.data[0]);
        })
        .catch((err) => console.error(err));
    }
  }, [userId]);

  return (
    <>
      <AppBar sx={{ position: 'sticky' }}>
        <Toolbar className="flex justify-center">
          <Typography>Bank Information</Typography>
        </Toolbar>
      </AppBar>
      {!userId && <Navigate to="/" />}
      <div className="flex justify-center items-center px-20 min-h-screen">
        <FormControl fullWidth>
          <Typography sx={{ marginBottom: 5 }} className="text-center">
            Please enter your bank details below to withdraw your balance to
            your bank account.
          </Typography>
          <TextField
            sx={{ marginBottom: 5 }}
            label="Account Name"
            value={bankInfo?.accountName}
            onChange={(e) =>
              setBankInfo({ ...bankInfo, accountName: e.target.value })
            }
          />
          <TextField
            sx={{ marginBottom: 5 }}
            label="Bank Name"
            value={bankInfo?.bankName}
            onChange={(e) =>
              setBankInfo({ ...bankInfo, bankName: e.target.value })
            }
          />
          <TextField
            sx={{ marginBottom: 5 }}
            label="Account Number"
            value={bankInfo?.accountNumber}
            onChange={(e) =>
              setBankInfo({ ...bankInfo, accountNumber: e.target.value })
            }
          />
          <Button
            className="hover:hover:bg-amber-500"
            variant="contained"
            sx={{ background: '#f7bd00', fontWeight: 'bolder' }}
            type="submit"
            onClick={handleAddBankInfo}
          >
            {postFetch ? (
              <CircularProgress sx={{ color: 'green' }} />
            ) : (
              'Submit'
            )}
          </Button>
        </FormControl>
        {/* hello guys */}
      </div>
    </>
  );
}
