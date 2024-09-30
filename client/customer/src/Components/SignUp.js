import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
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
// Importing countries and cities from JSON files
import countriesData from './JsonFiles/Countries.json';
import citiesData from './JsonFiles/Cities.json';

function SignUp() {
  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const onSubmit = (data) => {
    console.log('Sign up successful', data);
    reset();
  };

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowRepeatPassword = () => setShowRepeatPassword(!showRepeatPassword);

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
        Sign Up
      </Typography>

      <TextField
        fullWidth
        label="Full Name"
        spellCheck={false}
        {...register('fullName', {
          required: 'Full Name is required',
          pattern: {
            value: /^[A-Za-z\s]+$/,
            message: 'Only alphabets are allowed',
          },
        })}
        error={Boolean(errors.fullName)}
        helperText={errors.fullName?.message}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Phone Number"
        {...register('phone', {
          required: 'Phone Number is required',
          pattern: {
            value: /^[0-9]+$/,
            message: 'Only numeric values are allowed',
          },
          minLength: {
            value: 10,
            message: 'Phone number must be at least 10 digits',
          },
          maxLength: {
            value: 10,
            message: 'Phone number must not exceed 10 digits',
          },
        })}
        error={Boolean(errors.phone)}
        helperText={errors.phone?.message}
        margin="normal"
      />

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

      <Autocomplete
        options={countriesData.Countries}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Country"
            {...register('country', { required: 'Country is required' })}
            error={Boolean(errors.country)}
            helperText={errors.country?.message}
            spellCheck={false}
            margin="normal"
          />
        )}
      />

      <Autocomplete
        options={citiesData.Cities}
        renderInput={(params) => (
          <TextField
            {...params}
            label="City"
            {...register('city', { required: 'City is required' })}
            error={Boolean(errors.city)}
            helperText={errors.city?.message}
            spellCheck={false}
            margin="normal"
          />
        )}
      />

      <TextField
        fullWidth
        label="Password"
        type={showPassword ? 'text' : 'password'}
        {...register('password', {
          required: 'Password is required',
          pattern: {
            value: /^(?=.[a-z])(?=.[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
            message:
              'Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and be at least 8 characters long',
          },
        })}
        error={Boolean(errors.password)}
        helperText={errors.password?.message}
        margin="normal"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleClickShowPassword}>
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
              <IconButton onClick={handleClickShowRepeatPassword}>
                {showRepeatPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <FormControlLabel
        control={<Checkbox {...register('terms', { required: 'You must accept the terms and conditions' })} color="primary" />}
        label={
          <Typography variant="body2">
            I accept the <Link href="/terms" >Terms and Conditions</Link>
          </Typography>
        }
        sx={{ mt: 1, textAlign: 'left' }}
      />
      {errors.terms && (
        <Typography color="error" variant="body2">
          {errors.terms.message}
        </Typography>
      )}

      <Button type="submit" variant="contained" color="warning" fullWidth sx={{ mt: 2 }}>
        Sign Up
      </Button>

      <Box sx={{ mt: 2, textAlign: 'center' }}>
        <Link href="/Login" variant="body2">
          Already have an account? Login
        </Link>
      </Box>
    </Box>
  );
}

export default SignUp;