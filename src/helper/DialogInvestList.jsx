import React,{useState} from 'react';

import CloseIcon from '@mui/icons-material/Close';

import {
  Dialog,
  ListItem,
  List,
  Divider,
  AppBar,
  Toolbar,
  IconButton,
  Slide,
  Typography,
  CardMedia,
  Button,
  Avatar,
  CircularProgress,
} from '@mui/material';
import { Container } from '@mui/system';

// import logoImage from '../assets/logo.png';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

import moment from 'moment';

//icons
import StorageIcon from '@mui/icons-material/Storage';
import PaymentIcon from '@mui/icons-material/Payment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogInvestList({ open, setOpen, item }) {

  const navigate=useNavigate()
  const [fetching,setFetching]=useState(false)
  const userId = localStorage.getItem('login');
  console.log(userId);
  const handleClose = () => {
    setOpen(false);
  };

  const handleBuyInvest = () => {
    setFetching(true);
    axios
      .get(`https://transactionappcli.herokuapp.com/api/v1/users/${userId}`)
      .then((res) => {
        let userBalance = res.data[0].balance;
        let newBalance=userBalance - item.price
        
        if (userBalance > item.price) {
          axios
            .post('https://transactionappcli.herokuapp.com/api/v1/orders/addorder', {
              title:item.title,
              price:item.price,
              dailyIncome:item.dailyIncome,
              servingTime:item.servingTime,
              totalIncome:item.totalIncome,
              description:item.description,
              paymentTime:moment().format('MMMM Do YYYY, h:mm:ss a'),
              image:item.image,
              userId
            })
            .then((respond) => console.log(respond))
            .catch((er) => console.error(er));

          axios
            .patch(`https://transactionappcli.herokuapp.com/api/v1/users/${userId}`,{
              balance:newBalance
            })
            .then((response) => console.log(response))
            .catch((e)=>console.error(e));

            navigate('/homepage')
        } else {
          alert('The price is too hight');
        }
        setFetching(false)
        setOpen(false)
      })
      .catch((err) => console.error(err));
  };

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: 'relative' }}>
        <Toolbar className="flex justify-between">
          <div />

          <div>
            <Typography> {item.title} </Typography>
          </div>
          <IconButton
            edge="start"
            className="flex-start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <List>
        <Avatar
          style={{
            width: 300,
            height: 300,
            display: 'flex',
            justifyContent: 'center',
          }}
          className="mx-20"
        >
          <CardMedia
            style={{ textAlign: 'center' }}
            component="img"
            image={item.image}
          />
        </Avatar>

        <Divider />
        <ListItem>
          <StorageIcon sx={{ color: '#EAC530' }} />
          <Typography className="pl-3">Price: ₦{item.price}</Typography>
        </ListItem>
        <ListItem>
          <PaymentIcon sx={{ color: '#EAC530' }} />
          <Typography className="pl-3">
            Daily Income: ₦{item.dailyIncome}{' '}
          </Typography>
        </ListItem>
        <ListItem>
          <AttachMoneyIcon sx={{ color: '#EAC530' }} />
          <Typography className="pl-3">
            Total Income: ₦{item.totalIncome}
          </Typography>
        </ListItem>
        <ListItem>
          <AccessTimeIcon sx={{ color: '#EAC530' }} />
          <Typography className="pl-3">
            Serving Time: {item.servingTime}{' '}
          </Typography>
        </ListItem>

        <div className="mt-5" />
        <Container>
          <Typography>{item.description}</Typography>
          <div className="mt-10" />

          <Button
            fullWidth
            className="hover:hover:bg-amber-500 "
            variant="contained"
            sx={{ background: '#f7bd00' }}
            type="submit"
            onClick={handleBuyInvest}
          >
            {fetching?<CircularProgress sx={{color:'green'}} />:'buy Now'}
          </Button>
        </Container>
      </List>
    </Dialog>
  );
}
