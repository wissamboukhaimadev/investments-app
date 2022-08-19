import {
  Drawer,
  ListItem,
  Typography,
  List,
  ListItemAvatar,
  ListItemText,
  CardActionArea,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

import { useNavigate } from 'react-router-dom';

//icons
// import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PaymentIcon from '@mui/icons-material/Payment';

export default function AdminDrawer({ open, setOpen }) {
  const navigate = useNavigate();
  const handleClose = () => {
    setOpen(false);
  };

  // const handleDashboard = () => {
  //   navigate('/dashboard');
  // };
  const handleUsers = () => {
    navigate('/adminusers');
  };
  const handleInvestments = () => {
    navigate('/admininvestments');
  };
  const handleWithdraw = () => {
    navigate('/adminwihdraw');
  };
  return (
    <Drawer open={open} onClose={handleClose}>
      <Box>
        {/* <CardActionArea className="pr-20" onClick={handleDashboard}>
          <List sx={{ padding: 2, paddingRight: 10 }}>
            <ListItem>
              <ListItemAvatar>
                {' '}
                <DashboardIcon />{' '}
              </ListItemAvatar>
              <ListItemText>
                <Typography>Dashboard</Typography>
              </ListItemText>
            </ListItem>
          </List>
        </CardActionArea> */}
        {/* end */}
        <CardActionArea className="pr-20" onClick={handleUsers}>
          <List sx={{ padding: 2, paddingRight: 10 }}>
            <ListItem>
              <ListItemAvatar>
                {' '}
                <GroupIcon />{' '}
              </ListItemAvatar>
              <ListItemText>
                <Typography>Users</Typography>
              </ListItemText>
            </ListItem>
          </List>
        </CardActionArea>
        {/* end */}
        <CardActionArea className="pr-20" onClick={handleInvestments}>
          <List sx={{ padding: 2, paddingRight: 10 }}>
            <ListItem>
              <ListItemAvatar>
                {' '}
                <AttachMoneyIcon />{' '}
              </ListItemAvatar>
              <ListItemText>
                <Typography>Investements</Typography>
              </ListItemText>
            </ListItem>
          </List>
        </CardActionArea>
        {/* end */}
        <CardActionArea className="pr-20" onClick={handleWithdraw}>
          <List sx={{ padding: 2, paddingRight: 10 }}>
            <ListItem>
              <ListItemAvatar>
                {' '}
                <PaymentIcon />{' '}
              </ListItemAvatar>
              <ListItemText>
                <Typography>Withdraw</Typography>
              </ListItemText>
            </ListItem>
          </List>
        </CardActionArea>
        {/* end */}
      </Box>
    </Drawer>
  );
}
