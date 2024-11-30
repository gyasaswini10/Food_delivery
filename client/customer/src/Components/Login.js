import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import axios from 'axios';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [message, setMessage] = useState('');

  const onSubmit = async (data) => {
    setMessage(''); // Reset message

    try {
      const response = await axios.post('http://localhost:5000/api/users/login', data);
      const { token, username } = response.data;

      // Save the token
      localStorage.setItem('token', token);
      localStorage.setItem('username', username);

      setMessage('Login successful! Redirecting...');
      console.log('Login successful:', response.data);

      setTimeout(() => {
        window.location.href = '/home';  // Redirect to the home page after delay
      }, 2000); 
    } catch (error) {
      const errorMsg = error.response?.data?.message || 'Unknown error occurred';
      setMessage(`Login failed: ${errorMsg}`);
      console.error('Login failed:', error.response?.data || error.message);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        maxWidth: '400px',
        margin: 'auto',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        backgroundColor: 'white',
      }}
    >
      <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>Login</Typography>

      <TextField
        fullWidth
        label="Email"
        type="email"
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^\S+@\S+\.\S+$/,
            message: 'Enter a valid email',
          },
        })}
        error={Boolean(errors.email)}
        helperText={errors.email?.message}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Password"
        type="password"
        {...register('password', {
          required: 'Password is required',
        })}
        error={Boolean(errors.password)}
        helperText={errors.password?.message}
        margin="normal"
      />

      <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Login
      </Button>

      {message && (
        <Typography
          color={message.includes('failed') ? 'error' : 'primary'}
          variant="body2"
          sx={{ mt: 2, textAlign: 'center' }}
        >
          {message}
        </Typography>
      )}
    </Box>
  );
};

export default Login;
