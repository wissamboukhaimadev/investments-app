import { Button, FormControl, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Link } from '@mui/material';

import logoImage from '../assets/logo.png';

import { useNavigate } from 'react-router-dom';

import axios from 'axios';

export default function Register() {
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    phone: '',
    username: '',
    password: '',
    confirmPass: '',
  });
  const [error, setError] = useState('');
  const validData =
    Boolean(register.password.trim()) &&
    Boolean(register.confirmPass.trim()) &&
    Boolean(register.phone.trim()) &&
    Boolean(register.username.trim());
  const handleRegister = () => {
    if (
      register.password.length > 8 &&
      register.password == register.confirmPass
    ) {
      axios
        .post('https://transactionappcli.herokuapp.com/api/v1/users/adduser', {
          phone: register.phone,
          username: register.username,
          password: register.password,
          balance:50,
          referralnum:0
        })
        .then((res) =>{
          navigate('/login')
        })
        .catch((e) => console.log(e));
    } else {
      alert('not valid');
    }

    // navigate('/homepage');
  };
  return (
    <div className="flex justify-center items-center min-h-screen px-20">
      <FormControl fullWidth>
        <div className="flex justify-center pb-10 ">
          <img src={logoImage} alt="logo" />
        </div>
        <TextField
          sx={{ marginBottom: 5 }}
          label="User Name"
          onChange={(e) =>
            setRegister({ ...register, username: e.target.value })
          }
        />
        <TextField
          sx={{ marginBottom: 5 }}
          label="Mobile Number"
          onChange={(e) => setRegister({ ...register, phone: e.target.value })}
        />

        <TextField
          sx={{ marginBottom: 5 }}
          label="Password"
          type="password"
          onChange={(e) =>
            setRegister({ ...register, password: e.target.value })
          }
        />
        <TextField
          sx={{ marginBottom: 5 }}
          label="Confirm Password"
          type="password"
          onChange={(e) =>
            setRegister({ ...register, confirmPass: e.target.value })
          }
        />
        <Button
          className="hover:hover:bg-amber-500"
          variant="contained"
          sx={{ background: '#f7bd00' }}
          type="submit"
          onClick={handleRegister}
          disabled={!validData}
        >
          Register
        </Button>
        <Link href="/login" className="text-center pt-5 cursor-pointer">
          Already have an account?
        </Link>
      </FormControl>
    </div>
  );
}
