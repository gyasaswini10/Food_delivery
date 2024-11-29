import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { useForm } from 'react-hook-form';

const ForgotPassword = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Request for password reset sent', data);
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
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h5" component="div" sx={{ mb: 2, textAlign: 'center' }}>
        Forgot Password
      </Typography>

      <Typography variant="body1" align="center" sx={{ mb: 2 }}>
        Enter your email address and we'll send you a link to reset your password.
      </Typography>

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

      <Button type="submit" variant="contained" color="warning" fullWidth sx={{ mt: 2 }}>
        Send Reset Link
      </Button>
    </Box>
  );
};

export default ForgotPassword;
