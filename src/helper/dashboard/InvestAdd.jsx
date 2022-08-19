import { Button, FormControl, TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import axios from 'axios';

function InvestAdd() {
  const navigate= useNavigate()
  const [editInvest, setEditInvest] = useState({
    title: '',
    price: '',
    dailyIncome: '',
    totalIncome: '',
    servingTime: '',
    description: '',
    image: '',
  });
  const handleAddInvest = () => {
    axios
      .post('https://transactionappcli.herokuapp.com/api/v1/transactions/addtransaction', {
        title: editInvest.title,
        price:editInvest.price,
        dailyIncome:editInvest.dailyIncome,
        servingTime:editInvest.servingTime,
        totalIncome:editInvest.totalIncome,
        description:editInvest.description,
        image:editInvest.image,
      })
      .then((res) => {
        navigate('/admininvestments')
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="flex justify-center items-center min-h-screen px-20">
      <FormControl fullWidth>
        <TextField
          sx={{ marginTop: 5 }}
          label="title"
          onChange={(e) =>
            setEditInvest({ ...editInvest, title: e.target.value })
          }
        />
        <TextField
          sx={{ marginTop: 5 }}
          label="price"
          onChange={(e) =>
            setEditInvest({ ...editInvest, price: e.target.value })
          }
        />
        <TextField
          sx={{ marginTop: 5 }}
          label="dailyincome"
          onChange={(e) =>
            setEditInvest({ ...editInvest, dailyIncome: e.target.value })
          }
        />
        <TextField
          sx={{ marginTop: 5 }}
          label="totalIncome"
          onChange={(e) =>
            setEditInvest({ ...editInvest, totalIncome: e.target.value })
          }
        />
        <TextField
          sx={{ marginTop: 5 }}
          label="servingTime"
          onChange={(e) =>
            setEditInvest({ ...editInvest, servingTime: e.target.value })
          }
        />
        <TextField
          sx={{ marginTop: 5 }}
          label="description"
          onChange={(e) =>
            setEditInvest({ ...editInvest, description: e.target.value })
          }
        />
        <TextField
          sx={{ marginTop: 5 }}
          type="file"
          label="description"
          onChange={(e) => {
            const reader = new FileReader();
            reader.onload = () => {
              // localStorage.setItem("image",reader.result)
              setEditInvest({ ...editInvest, image: reader.result });
            };
            reader.readAsDataURL(e.target.files[0]);
          }}
        />
        <Button
          sx={{ marginTop: 5 }}
          variant="contained"
          color="secondary"
          onClick={handleAddInvest}
        >
          Add Innvest
        </Button>
      </FormControl>
    </div>
  );
}

export default InvestAdd;
