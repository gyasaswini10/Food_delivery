import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import emailjs from '@emailjs/browser';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [message, setMessage] = useState('');

  const sendEmailNotification = (recipientEmail) => {
    const templateParams = {
      to_email: recipientEmail, // Matches the placeholder {{to_email}} in your template
      from_name: 'DelightZone', // Matches the placeholder {{from_name}} in your template
      reply_to: 'delightzonefooddelivery@gmail.com', // Matches the placeholder {{reply_to}} in your template
    };

    emailjs
      .send(
        'service_7h8xldq', // Service ID
        'template_qmafyzq', // Template ID
        templateParams,
        'uatl4u2BqUitxqXus' // Public Key
      )
      .then((result) => {
        console.log('Email sent successfully:', result.text);
      })
      .catch((error) => {
        console.error('Email sending error:', error);
        alert(`Failed to send email: ${error.text || error.message || 'Unknown Error'}`);
      });
  };

  const onSubmit = async (data) => {
    setMessage(''); // Reset message

    try {
      const response = await axios.post('https://project-server1.onrender.com/api/users/login', data);
      const { token, username } = response.data;

      // Save the token
      localStorage.setItem('token', token);
      localStorage.setItem('username', username);

      // Send login notification email
      sendEmailNotification(data.email);

      setMessage('Login successful! Redirecting...');
      console.log('Login successful:', response.data);

      setTimeout(() => {
        window.location.href = '/home'; // Redirect to the home page after delay
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
        color='warning'
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
        color='warning'
        type="password"
        {...register('password', {
          required: 'Password is required',
        })}
        error={Boolean(errors.password)}
        helperText={errors.password?.message}
        margin="normal"
      />

      <Button type="submit" variant="contained" color="warning" fullWidth sx={{ mt: 2 }}>
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
