import React, { useState, useEffect } from 'react';
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
  AppBar,
  Toolbar,
  IconButton,
} from '@mui/material';
import { Container } from '@mui/system';

import { Navigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';

//icons
import MenuIcon from '@mui/icons-material/Menu';

import AdminDrawer from '../AdminDrawer';
export default function UserDetails() {
  const [searchParams] = useSearchParams();
  const adminEmail=localStorage.getItem('admin')

  const id = searchParams.get('id');

  const [open, setOpen] = useState(false);
  const [bankInfo, setBankInfo] = useState([]);
  const [fetching, setFetching] = useState(true);
  const handleOpenDrawer = () => {
    setOpen(true);
  };

  useEffect(() => {
    if (id) {
      axios
        .get(`https://transactionappcli.herokuapp.com/api/v1/users/${id}`)
        .then((res) => {
          setBankInfo(res.data);
          setFetching(false);
        })
        .catch((err) => console.error(err));
    }
  }, [id]);

  return (
    <div>
      <AppBar sx={{ position: 'sticky' }}>
        <Toolbar className="flex justify-evenly">
          <IconButton onClick={handleOpenDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography>User Info</Typography>
        </Toolbar>
      </AppBar>
      <AdminDrawer open={open} setOpen={setOpen} />
{!adminEmail && <Navigate to='/dashboardlogin' />}
{!id && <Navigate to='/dashboardlogin' />}
      <Container className='pt-10' >
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ background: '#f7bd00' }}>
              <TableCell>
                <Typography>username</Typography>
              </TableCell>
              <TableCell>
                <Typography>phone</Typography>
              </TableCell>
              <TableCell>
                <Typography>balance</Typography>
              </TableCell>
            </TableHead>
            {fetching && (
              <Backdrop open={true}>
                {' '}
                <CircularProgress />{' '}
              </Backdrop>
            )}

            {bankInfo?.map((item, index) => {
                return (
                  <TableBody key={index}>
                    <TableCell>
                      <Typography> {item.username}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>{item.phone}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>{item.balance}</Typography>
                    </TableCell>
                  </TableBody>
                );
              })}
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
}
