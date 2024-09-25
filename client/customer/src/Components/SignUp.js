import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [profilePicture, setProfilePicture] = useState(null);

  const onSubmit = (data) => {
    // Handle the signup logic here using the data object
    console.log('Sign up successful', data);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file));
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        maxWidth: '400px', // Set maximum width for the form
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
      
      <TextField
        fullWidth
        type="password"
        label="Password"
        {...register('password', {
          required: 'Password is required',
          minLength: {
            value: 6,
            message: 'Password must be at least 6 characters',
          },
        })}
        error={Boolean(errors.password)}
        helperText={errors.password?.message}
        margin="normal"
      />

      <FormControlLabel
        control={<Checkbox {...register('terms', { required: 'You must accept the terms and conditions' })} color="primary" />}
        label="I accept the Terms and Conditions"
        sx={{ mt: 1, textAlign: 'left' }}
      />
      {errors.terms && <Typography color="error">{errors.terms.message}</Typography>}
      
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
