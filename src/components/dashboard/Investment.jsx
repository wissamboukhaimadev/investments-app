import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Grid,
  FormControl,
  TextField,
  Button,
  Backdrop,
  CircularProgress,
} from '@mui/material';
import React, { useState, memo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

//icons
import MenuIcon from '@mui/icons-material/Menu';
import AdminDrawer from '../../helper/AdminDrawer';
import AllInvestments from '../../helper/dashboard/AllInvestments';
import { Container } from '@mui/system';

function Investment() {
  const navigate = useNavigate();
  const adminEmail = localStorage.getItem('admin');
  if (!adminEmail) {
    navigate('/homepage');
  }
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [investements, setInvestements] = useState([]);
  const [fetching,setFetching]=useState(true)

  const handleOpenDrawer = () => {
    setOpen(true);
  };
  const handleAddInvest = () => {
    navigate('/addinvest');
  };
  useEffect(() => {
    axios
      .get('https://transactionappcli.herokuapp.com/api/v1/transactions')
      .then((res) => {
        setInvestements(res.data);
        setFetching(false)
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <AppBar sx={{ position: 'sticky' }}>
        <Toolbar className="flex justify-evenly">
          <IconButton onClick={handleOpenDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography>Dashboard</Typography>
        </Toolbar>
      </AppBar>

      <AdminDrawer open={open} setOpen={setOpen} />

      <Container className="pt-20">
        <FormControl fullWidth>
          <TextField
            className="px-20"
            label="search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </FormControl>
      </Container>
      <div className="pt-20" />
      <Container>
        <Button onClick={handleAddInvest} fullWidth variant="outlined">
          Add Investment
        </Button>
      </Container>
      <div className="pt-20" />
      {fetching && <Backdrop open={true} > <CircularProgress/> </Backdrop>}
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
        {investements?.filter(val=>val.title.toLowerCase().includes(search.toLowerCase()) ||val.description.toLowerCase().includes(search.toLowerCase())).map((item, index) => {
            return (
              <Grid item xs={6} key={index}>
                <AllInvestments item={item} />
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
}
export default memo(Investment);
