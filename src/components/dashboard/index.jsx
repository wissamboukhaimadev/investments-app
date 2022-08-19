import {
  Alert,
  AlertTitle,
  AppBar,
  Button,
  FormControl,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const user = {
    username: 'uaisjdjjsdk',
    password: 'sakkljjuqou3@2',
  };
  const [login, setLogin] = useState({ username: '', password: '' });
  const [error, setError] = useState(false);

  const handleAdminLogin = () => {
    if (login.username === user.username && login.password === user.password) {
      localStorage.setItem('admin', user.username);
      setError(false);
      navigate('/dashboard');
    } else {
      setError(true);
    }
  };
  return (
    <div>
      <AppBar sx={{ position: 'sticky' }}>
        <Toolbar className="flex justify-center">
          <Typography>Admin Dashboard</Typography>
        </Toolbar>
      </AppBar>
      
      <main
        className="flex justify-center items-center px-20"
        style={{ height: 'calc(100vh - 100px  )' }}
      >
        <FormControl fullWidth>
          {error ? (
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              <strong> Your credential is incorrect </strong>
            </Alert>
          ) : (
            ''
          )}
          <div className="mt-5" />
          <TextField
            sx={{ marginBottom: 5 }}
            label="username"
            type="username"
            onChange={(e) => setLogin({ ...login, username: e.target.value })}
          />
          <TextField
            sx={{ marginBottom: 5 }}
            label="password"
            type="password"
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
          />
          <Button
            className="hover:hover:bg-amber-500"
            variant="contained"
            sx={{ background: '#f7bd00', fontWeight: 'bolder' }}
            type="submit"
            onClick={handleAdminLogin}
          >
            login
          </Button>
        </FormControl>
      </main>
    </div>
  );
}
