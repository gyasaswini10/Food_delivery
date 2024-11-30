import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios';
import countriesData from './JsonFiles/Countries.json'; // Ensure these JSON files exist
import citiesData from './JsonFiles/Cities.json';

const SignUp = () => {
  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();  // Initialize navigate for redirection

  const onSubmit = async (data) => {
    setErrorMessage('');
    setSuccessMessage('');
    try {
      const response = await axios.post('http://localhost:5000/api/users/register', data);
      setSuccessMessage('Sign-up successful! Redirecting to login...');  // Show success message

      setTimeout(() => {
        navigate('/login');  // Redirect to login page after 2 seconds
      }, 2000);  // 2-second delay for the success message to be visible

      reset();  // Reset form fields after successful sign-up
    } catch (error) {
      // Check if the error is related to email uniqueness
      if (error.response?.status === 400 && error.response?.data?.message === 'Email already exists') {
        setErrorMessage('Email is already in use. Please try with a different email.');
      } else {
        setErrorMessage('An error occurred during sign-up. Please try again.');
      }
    }
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleRepeatPasswordVisibility = () => setShowRepeatPassword(!showRepeatPassword);

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
      <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>Sign Up</Typography>

      {errorMessage && <Typography color="error" variant="body2" sx={{ textAlign: 'center' }}>{errorMessage}</Typography>}
      {successMessage && <Typography color="success" variant="body2" sx={{ textAlign: 'center' }}>{successMessage}</Typography>}

      <TextField
        fullWidth
        label="Full Name"
        {...register('fullName', { required: 'Full Name is required' })}
        error={Boolean(errors.fullName)}
        helperText={errors.fullName?.message}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Phone Number"
        {...register('phone', {
          required: 'Phone number is required',
          pattern: {
            value: /^[0-9]+$/,
            message: 'Enter a valid phone number',
          },
          minLength: {
            value: 10,
            message: 'Must be at least 10 digits',
          },
        })}
        error={Boolean(errors.phone)}
        helperText={errors.phone?.message}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Email"
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

      <Autocomplete
        options={countriesData.Countries}
        renderInput={(params) => (
          <TextField
            {...params}
            {...register('country', { required: 'Country is required' })}
            label="Country"
            margin="normal"
          />
        )}
      />

      <Autocomplete
        options={citiesData.Cities}
        renderInput={(params) => (
          <TextField
            {...params}
            {...register('city', { required: 'City is required' })}
            label="City"
            margin="normal"
          />
        )}
      />

      <TextField
        fullWidth
        label="Address"
        {...register('address', { required: 'Address is required' })}
        error={Boolean(errors.address)}
        helperText={errors.address?.message}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Password"
        type={showPassword ? 'text' : 'password'}
        {...register('password', { required: 'Password is required' })}
        error={Boolean(errors.password)}
        helperText={errors.password?.message}
        margin="normal"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={togglePasswordVisibility}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <TextField
        fullWidth
        label="Repeat Password"
        type={showRepeatPassword ? 'text' : 'password'}
        {...register('passwordRepeat', {
          required: 'Repeat Password is required',
          validate: (value) => value === watch('password') || 'Passwords do not match',
        })}
        error={Boolean(errors.passwordRepeat)}
        helperText={errors.passwordRepeat?.message}
        margin="normal"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={toggleRepeatPasswordVisibility}>
                {showRepeatPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <FormControlLabel
        control={<Checkbox {...register('terms', { required: 'You must accept the terms' })} />}
        label="I accept the terms and conditions"
      />
      {errors.terms && <Typography color="error">{errors.terms.message}</Typography>}

      <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Sign Up
      </Button>

      <Box sx={{ mt: 2, textAlign: 'center' }}>
        <Link href="/login" variant="body2">Already have an account? Login</Link>
      </Box>
    </Box>
  );
};

export default SignUp;
