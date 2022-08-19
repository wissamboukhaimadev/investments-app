import * as React from 'react';

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
} from '@mui/material';
import { Container } from '@mui/system';

import logoImage from '../assets/logo.png';

//icons
import StorageIcon from '@mui/icons-material/Storage';
import PaymentIcon from '@mui/icons-material/Payment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogTransactions({ open, setOpen, item }) {
  const handleClose = () => {
    setOpen(false);
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
        <ListItem>
          <Avatar sx={{width:300,height:300}} className='mx-20'  >
            <CardMedia component="img" image={item.image} />
          </Avatar>
        </ListItem>
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

        <Divider />

        <Divider />

        <ListItem>
          <StorageIcon sx={{ color: '#EAC530' }} />
          <Typography className="pl-3">Order No : D1658001770291803</Typography>
        </ListItem>

        <ListItem>
          <AttachMoneyIcon sx={{ color: '#EAC530' }} />
          <Typography className="pl-3">
            Payment Time : {item.paymentTime}
          </Typography>
        </ListItem>
        <ListItem sx={{ color: '#EAC530' }}>
          <AccessTimeIcon sx={{ color: '#EAC530' }} />
          <Typography className="pl-3">
            Serving Time: {item.servingTime}
          </Typography>
        </ListItem>
        {/* <ListItem sx={{ color: '#EAC530' }}>
          <AccessTimeIcon sx={{ color: '#EAC530' }} />
          <Typography className="pl-3">Already Returned : ₦0</Typography>
        </ListItem> */}

        <div className="mt-5" />
        <Container>
          <Typography>{item.description}</Typography>
          <div className="mt-10" />
          {/* <Button
            fullWidth
            className="hover:hover:bg-amber-500 "
            variant="contained"
            sx={{ background: '#f7bd00' }}
            type="submit"
          >
            Buy Now
          </Button> */}
        </Container>
      </List>
    </Dialog>
  );
}
