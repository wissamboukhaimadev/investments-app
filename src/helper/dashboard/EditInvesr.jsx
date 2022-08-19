import {
  Backdrop,
  Button,
  CircularProgress,
  FormControl,
  TextField,
} from '@mui/material';
import React from 'react';
import { useState, useEffect } from 'react';

import { useSearchParams, useNavigate, Navigate } from 'react-router-dom';
import axios from 'axios';

function EditInvesr() {
  const navigate = useNavigate();
  const [searchId] = useSearchParams();
  const transId = searchId.get('id');

  const [investId, setInvestId] = useState({});
  const [fetching, setFetching] = useState(true);

  const handleChangeInvest = () => {
    axios
      .patch(`https://transactionappcli.herokuapp.com/api/v1/transactions/${transId}`, {
        title: investId.title,
        price: investId.price,
        dailyIncome: investId.dailyIncome,
        totalIncome: investId.totalIncome,
        servingTime: investId.servingTime,
        description: investId.description,
        image: investId.image,
      })
      .then((res) => {
        navigate('/admininvestments');
      })
      .catch((err) => console.error(err));
  };

  const handleDeleteInvest = () => {
    axios
      .delete(`https://transactionappcli.herokuapp.com/api/v1/transactions/${transId}`)
      .then((res) => navigate('/admininvestments'))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (transId) {
      axios
        .get(`https://transactionappcli.herokuapp.com/api/v1/transactions/${transId}`)
        .then((res) => {
          setInvestId(res.data[0]);
          setFetching(false);
        })
        .catch((err) => console.error(err));
    }
  }, [transId]);

  return (
    <div className="flex justify-center items-center min-h-screen px-20">
      {!transId && <Navigate to="/dashboard" />}
      <FormControl fullWidth>
        {fetching && (
          <Backdrop open={true}>
            {' '}
            <CircularProgress />{' '}
          </Backdrop>
        )}
        <TextField
          sx={{ marginTop: 5 }}
          label="Title"
          value={investId?.title}
          onChange={(e) => setInvestId({ ...investId, title: e.target.value })}
        />
        <TextField
          sx={{ marginTop: 5 }}
          label="price"
          value={investId?.price}
          onChange={(e) => setInvestId({ ...investId, price: e.target.value })}
        />

        <TextField
          sx={{ marginTop: 5 }}
          label="dailyincome"
          value={investId?.dailyIncome}
          onChange={(e) =>
            setInvestId({ ...investId, dailyIncome: e.target.value })
          }
        />
        <TextField
          sx={{ marginTop: 5 }}
          label="totalIncome"
          value={investId?.totalIncome}
          onChange={(e) =>
            setInvestId({ ...investId, totalIncome: e.target.value })
          }
        />
        <TextField
          sx={{ marginTop: 5 }}
          label="servingTime"
          value={investId?.servingTime}
          onChange={(e) =>
            setInvestId({ ...investId, servingTime: e.target.value })
          }
        />
        <TextField
          sx={{ marginTop: 5 }}
          label="description"
          value={investId?.description}
          onChange={(e) =>
            setInvestId({ ...investId, description: e.target.value })
          }
        />
        <TextField
          sx={{ marginTop: 5 }}
          label="image"
          type="file"
          onChange={(e) => {
            const reader = new FileReader();
            reader.onload = () => {
              // localStorage.setItem("image",reader.result)
              setInvestId({ ...investId, image: reader.result });
            };
            reader.readAsDataURL(e.target.files[0]);
          }}
        />
        <Button
          sx={{ marginTop: 5 }}
          variant="contained"
          color="secondary"
          onClick={handleChangeInvest}
        >
          EDIT
        </Button>
        <Button
          sx={{ marginTop: 5 }}
          variant="contained"
          color="secondary"
          onClick={handleDeleteInvest}
        >
          delete
        </Button>
      </FormControl>
    </div>
  );
}

export default EditInvesr;
