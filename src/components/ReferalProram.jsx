import React from 'react';
import { AppBar, Toolbar, Typography, Container,Button } from '@mui/material';
import imageReferal from '../assets/referral.png';

import {Navigate} from 'react-router-dom'

//icons
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import GroupsIcon from '@mui/icons-material/Groups';

export default function ReferalProram() {

  const userId=localStorage.getItem('login')

  const handleGetReferralLink=()=>{
    console.log('referral Link')
  }

  return (
    <div>
      <AppBar sx={{ position: 'sticky' }}>
        <Toolbar className="flex justify-center">
          <Typography>Referral Program</Typography>
        </Toolbar>
      </AppBar>
      {!userId && <Navigate to='/' />}

      <img style={{ width: '100%' }} src={imageReferal} alt="loj" />

      <Typography sx={{ color: '#f7bd00' }} className="pl-10" variant="h3">
        Want to earn passive income?
      </Typography>
      <Typography className="pl-11 pt-5" variant="h5">
        Get your link and refer friends to Transocean, enjoy profit up to 15%
        commission of 3 levels.
      </Typography>

      <Container className="pt-5">
        <Typography sx={{ color: '#f7bd00' }} variant="h5">
          Earn money now!
        </Typography>
        <div>
          <div className="flex justify-center">
            <PersonAddAlt1Icon fontSize="large" />
          </div>
          <Typography>
            1.Get <span style={{ color: '#f7bd00' }}>10%</span> commission of
            Level 1 immediately when your friends A sign up and buy products
            through your referral link.{' '}
          </Typography>
        </div>

        <div className='pt-5' >
          <div className="flex justify-center">
            <GroupAddIcon fontSize="large" />
          </div>
          <Typography>
            2.Get <span style={{ color: '#f7bd00' }}>4%</span> commission of
            Level 2 when your friends A refer others B to buy products on
            Transocean , you will earn 4% of B's Payment amount.{' '}
          </Typography>
        </div>

        <div className='pt-5' >
          <div className="flex justify-center">
            <GroupsIcon fontSize="large" />
          </div>
          <Typography>
            3.Get <span style={{ color: '#f7bd00' }}>1%</span> commission of
            Level 3. Again, when B refers to C to buy products on Transocean,
            you will earn 1% of C's Payment amount.
          </Typography>
        </div>


        <div className='pt-10'>
        <Button
          fullWidth
          className="hover:hover:bg-amber-500 pt-10"
          variant="contained"
          sx={{ background: '#f7bd00', fontWeight: 'bold' }}
          type="submit"
          onClick={handleGetReferralLink}
        >
          Get My Referal Link
        </Button>
        </div>
      </Container>

      <div className='pb-10' />


    </div>
  );
}
