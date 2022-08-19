import { Button, FormControl, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Link } from '@mui/material';

import logoImage from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

export default function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({ username: '', password: '' });
  const [error, setError] = useState(false);

  const validData =
    Boolean(login.username.trim()) && Boolean(login.password.trim());

  const handleLogin = () => {
    axios
      .post('https://transactionappcli.herokuapp.com/api/v1/users/login', {
        username: login.username,
        password: login.password,
      })
      .then((res) => {
        if (res.data.length === 0) {
          setError(true);
        } else {
          localStorage.setItem('login', res.data[0]._id);
          
          navigate('/homepage');
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex justify-center items-center min-h-screen px-20">
      <FormControl fullWidth>
        {error && (
          <div
            className="text-center pb-10"
            style={{ color: 'red', fontSize: '20px' }}
          >
            Your credantial is incorrect
          </div>
        )}
        <div className="flex justify-center pb-10 ">
          <img src={logoImage} alt="logo" />
        </div>
        <TextField
          sx={{ marginBottom: 5 }}
          label="User Name"
          onChange={(e) => setLogin({ ...login, username: e.target.value })}
        />
        <TextField
          sx={{ marginBottom: 5 }}
          label="Password"
          type='password'
          onChange={(e) => setLogin({ ...login, password: e.target.value })}
        />
        <Button
          className="hover:hover:bg-amber-500"
          variant="contained"
          sx={{ background: '#f7bd00' }}
          type="submit"
          onClick={handleLogin}
          disabled={!validData}
        >
          Login
        </Button>
        <div className="pt-5 flex justify-between">
          <Link href="/" className="cursor-pointer">
            Create account
          </Link>
          {/* <Link href="/login" className="cursor-pointer">
            Forgot password?
          </Link> */}
        </div>
      </FormControl>
    </div>
  );
}
