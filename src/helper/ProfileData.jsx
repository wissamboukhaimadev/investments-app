import {
  Container,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';

import { useNavigate } from 'react-router-dom';

//icons
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PaymentIcon from '@mui/icons-material/Payment';
import GroupIcon from '@mui/icons-material/Group';
import PaidIcon from '@mui/icons-material/Paid';
import InfoIcon from '@mui/icons-material/Info';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function ProfileData() {
  const navigate = useNavigate();

  const handleBank = () => {
    navigate('/bankinfo');
  };
  const handleWithdraw = () => {
    navigate('/withdraw');
  };
  const handleReferalProgram = () => {
    navigate('/referalprogram');
  };
  const handleReferalIncome = () => {
    navigate('/referalincome');
  };
  const handlePersonalInfo = () => {
    navigate('/info');
  };
  const handleAboutUs = () => {
    navigate('/aboutus');
  };
  const handleLogOut = () => {
    localStorage.removeItem('login')
    navigate('/')
  };
  return (
    <Container className="pt-10">
      <List>
        {/* {bank} */}
        <ListItem button onClick={handleBank}>
          <ListItemAvatar>
            <AccountBalanceIcon sx={{ color: '#E3B409' }} />
          </ListItemAvatar>
          <ListItemText ClassName="pl-10">
            <Typography>My Bank INFO</Typography>
          </ListItemText>
          <ListItemAvatar>
            <ArrowForwardIosIcon />
          </ListItemAvatar>
        </ListItem>
        {/* {end Bank} */}
        {/* {bank} */}
        <ListItem button onClick={handleWithdraw}>
          <ListItemAvatar>
            <PaymentIcon sx={{ color: '#E3B409' }} />
          </ListItemAvatar>
          <ListItemText ClassName="pl-10">
            <Typography>Widthdraw</Typography>
          </ListItemText>
          <ListItemAvatar>
            <ArrowForwardIosIcon />
          </ListItemAvatar>
        </ListItem>
        {/* {end Bank} */}
        {/* {bank} */}
        <ListItem button onClick={handleReferalProgram}>
          <ListItemAvatar>
            <GroupIcon sx={{ color: '#E3B409' }} />
          </ListItemAvatar>
          <ListItemText ClassName="pl-10">
            <Typography>Referal Program</Typography>
          </ListItemText>
          <ListItemAvatar>
            <ArrowForwardIosIcon />
          </ListItemAvatar>
        </ListItem>
        {/* {end Bank} */}
        {/* {bank} */}
        <ListItem button onClick={handleReferalIncome}>
          <ListItemAvatar>
            <PaidIcon sx={{ color: '#E3B409' }} />
          </ListItemAvatar>
          <ListItemText ClassName="pl-10">
            <Typography>Referal Income</Typography>
          </ListItemText>
          <ListItemAvatar>
            <ArrowForwardIosIcon />
          </ListItemAvatar>
        </ListItem>
        {/* {end Bank} */}
        {/* {bank} */}
        <ListItem button onClick={handleAboutUs}>
          <ListItemAvatar>
            <InfoIcon sx={{ color: '#E3B409' }} />
          </ListItemAvatar>
          <ListItemText ClassName="pl-10">
            <Typography>AboutUS</Typography>
          </ListItemText>
          <ListItemAvatar>
            <ArrowForwardIosIcon />
          </ListItemAvatar>
        </ListItem>
        {/* {end Bank} */}
        {/* {bank} */}
        <ListItem button onClick={handlePersonalInfo}>
          <ListItemAvatar>
            <PersonIcon sx={{ color: '#E3B409' }} />
          </ListItemAvatar>
          <ListItemText ClassName="pl-10">
            <Typography>Personal Information</Typography>
          </ListItemText>
          <ListItemAvatar>
            <ArrowForwardIosIcon />
          </ListItemAvatar>
        </ListItem>
        {/* {end Bank} */}
        {/* {bank} */}
        <ListItem button onClick={handleLogOut}>
          <ListItemAvatar>
            <LogoutIcon sx={{ color: '#E3B409' }} />
          </ListItemAvatar>
          <ListItemText ClassName="pl-10">
            <Typography>Log Out</Typography>
          </ListItemText>
          <ListItemAvatar>
            <ArrowForwardIosIcon />
          </ListItemAvatar>
        </ListItem>
        {/* {end Bank} */}
      </List>
    </Container>
  );
}
