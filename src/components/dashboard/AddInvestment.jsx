import React, { useState } from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';

//icons
import MenuIcon from '@mui/icons-material/Menu';

//componensts
import AdminDrawer from '../../helper/AdminDrawer';
import InvestAdd from '../../helper/dashboard/InvestAdd';
import { Navigate } from 'react-router-dom';

function AddInvestment() {
  const [open, setOpen] = useState(false);
  const adminEmail=localStorage.getItem('admin')

  const handleOpenDrawer = () => {
    setOpen(true);
  };

  return (
    <div>
      <AppBar sx={{ position: 'sticky' }}>
        <Toolbar className="flex justify-evenly">
          <IconButton onClick={handleOpenDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography>Add Invest</Typography>
        </Toolbar>
      </AppBar>
      {!adminEmail && <Navigate to="/dashboardlogin" />}

      <AdminDrawer open={open} setOpen={setOpen} />
      <InvestAdd/>
    </div>
  );
}

export default AddInvestment;
