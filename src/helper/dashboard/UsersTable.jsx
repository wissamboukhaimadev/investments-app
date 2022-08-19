import {
  TableContainer,
  TableHead,
  Table,
  TableCell,
  Paper,
  TableBody,
  Typography,
  Backdrop,
  CircularProgress,
  Dialog,
  IconButton,
  FormControl,
  TextField,
  Button,
} from '@mui/material';
import { Container } from '@mui/system';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {useNavigate} from 'react-router-dom'

//icons
import EditIcon from '@mui/icons-material/Edit';

export default function UsersTable() {
  
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const [orderList, setOrderList] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [userInfo, setUserInfo] = useState({});
  const [fetchingUser, setFetchingUser] = useState(true);

  const [userBalance, setUserBalance] = useState('');

  const handleOpenDialogForDailyIncome = (id) => {
    setOpen(true);
    axios
      .get(`https://transactionappcli.herokuapp.com/api/v1/orders/byuser/${id}`)
      .then((res) => {
        setOrderList(res.data);
        setFetching(false);
      })
      .catch((err) => console.error(err));
  };

  const handleEditItems = (id) => {
    setOpenEdit(true);
    axios
      .get(`https://transactionappcli.herokuapp.com/api/v1/users/${id}`)
      .then((res) => {
        setUserInfo(res.data[0]);
        setFetchingUser(false);
        setUserBalance(res.data[0].balance)
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    axios
      .get('https://transactionappcli.herokuapp.com/api/v1/users')
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Container className="pt-10">
      <DialogDailyIncome
        open={open}
        setOpen={setOpen}
        orderList={orderList}
        fetching={fetching}
      />
      <EditItems
        openEdit={openEdit}
        setOpenEdit={setOpenEdit}
        userInfo={userInfo}
        fetchingUser={fetchingUser}
        userBalance={userBalance}
        setUserBalance={setUserBalance}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ background: '#f7bd00' }}>
            <TableCell>
              <Typography>Mobile Number</Typography>
            </TableCell>
            <TableCell>
              <Typography>user name</Typography>
            </TableCell>
            <TableCell>
              <Typography>Balance</Typography>
            </TableCell>
            <TableCell>
              <Typography>Referral Number</Typography>
            </TableCell>
            <TableCell>
              <Typography>Actions</Typography>
            </TableCell>
          </TableHead>
          {users.length > 0 ? (
            ''
          ) : (
            <Backdrop open={true}>
              <CircularProgress color="inherit" />
            </Backdrop>
          )}
          {users?.map((item, index) => {
            return (
              <TableBody>
                <TableCell
                  onClick={() => handleOpenDialogForDailyIncome(item._id)}
                >
                  <Typography> {item.phone} </Typography>
                </TableCell>
                <TableCell
                  onClick={() => handleOpenDialogForDailyIncome(item._id)}
                >
                  <Typography> {item.username} </Typography>
                </TableCell>
                <TableCell
                  onClick={() => handleOpenDialogForDailyIncome(item._id)}
                >
                  <Typography> {item.balance} </Typography>
                </TableCell>
                <TableCell
                  onClick={() => handleOpenDialogForDailyIncome(item._id)}
                >
                  <Typography> {item.referralnum} </Typography>
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEditItems(item._id)}>
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableBody>
            );
          })}
        </Table>
      </TableContainer>
    </Container>
  );
}

const DialogDailyIncome = ({ open, setOpen, orderList, fetchingUser }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      {fetchingUser && (
        <Backdrop open={true}>
          {' '}
          <CircularProgress />{' '}
        </Backdrop>
      )}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableCell>
              {' '}
              <Typography>dailyIncome</Typography>{' '}
            </TableCell>
            <TableCell>
              {' '}
              <Typography>payment Time</Typography>{' '}
            </TableCell>
          </TableHead>

          {orderList?.map((item, index) => {
            return (
              <TableBody>
                <TableCell>
                  {' '}
                  <Typography>{item.dailyIncome}</Typography>{' '}
                </TableCell>
                <TableCell>
                  {' '}
                  <Typography>{item.paymentTime}</Typography>{' '}
                </TableCell>
              </TableBody>
            );
          })}
        </Table>
      </TableContainer>
    </Dialog>
  );
};

const EditItems = ({ openEdit, setOpenEdit, fetchingUser, userInfo,userBalance,setUserBalance }) => {
  const navigate=useNavigate()
  const handleClose = () => {
    setOpenEdit(false);
  };
  const handleEditBalance = () => {
    axios.patch(`https://transactionappcli.herokuapp.com/api/v1/users/${userInfo._id}`,{
      balance:userBalance,
    }).then(res=>{
      navigate('/dashboard')
    }).catch(err=>console.error(err))
  };
  return (
    <Dialog open={openEdit} onClose={handleClose}>
      {fetchingUser && (
        <Backdrop open={true}>
          {' '}
          <CircularProgress />{' '}
        </Backdrop>
      )}
      <FormControl fullWidth>
        <TextField
          sx={{ marginTop: 2 }}
          label="balance"
          value={userBalance}
          onChange={(e) => setUserBalance(e.target.value)}
        />
        <Button
          sx={{ marginTop: 2 }}
          variant="contained"
          onClick={handleEditBalance}
        >
          {' '}
          Edit{' '}
        </Button>
        <div style={{ marginTop: 5 }} />
      </FormControl>
    </Dialog>
  );
};
