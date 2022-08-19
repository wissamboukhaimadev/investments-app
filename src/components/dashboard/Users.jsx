import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

//icons
import MenuIcon from '@mui/icons-material/Menu';
import AdminDrawer from '../../helper/AdminDrawer';
import UsersTable from '../../helper/dashboard/UsersTable';



export default function Users() {
 
  const adminEmail = localStorage.getItem('admin');

  const [open, setOpen] = useState(false);

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
          <Typography>Dashboard</Typography>
        </Toolbar>
      </AppBar>
{!adminEmail && <Navigate to="/dashboardlogin" />}
      <AdminDrawer open={open} setOpen={setOpen} />
      <UsersTable />
    </div>
  );
}
