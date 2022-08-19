import React,{useState} from 'react';
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,

} from '@mui/material';

import AdminDrawer from '../../helper/AdminDrawer';

import MenuIcon from '@mui/icons-material/Menu';
import EditInvesr from '../../helper/dashboard/EditInvesr';
import { Navigate } from 'react-router-dom';

function EditInvesment() {

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
          <Typography>Edit Invest</Typography>
        </Toolbar>
      </AppBar>
{!adminEmail && <Navigate to="/dashboardlogin" />}
      <AdminDrawer open={open} setOpen={setOpen} />
      <EditInvesr/>
    </div>
  );
}

export default EditInvesment;
