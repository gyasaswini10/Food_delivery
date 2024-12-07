import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button, Grid } from '@mui/material';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [messageSent, setMessageSent] = useState(null); // State to handle success message

  const onSubmit = (data) => {
    const emailParams = {
      from_name: data.fullName,
      reply_to: data.email,
      message: data.message,
    };

    emailjs
      .send(
        'service_7h8xldq', // Replace with your EmailJS Service ID
        'template_0y1n5lv', // Replace with your EmailJS Template ID
        emailParams,
        'uatl4u2BqUitxqXus' // Replace with your EmailJS Public Key
      )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setMessageSent('Your message has been sent successfully!'); // Set success message
        reset(); // Clear the form after successful submission
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setMessageSent('Failed to send the message. Please try again later.'); // Set error message
      });
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f4f6f8' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        We are here to assist you! Feel free to reach out to us for any inquiries or feedback.
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <Card variant="outlined" style={{ height: '100%', boxShadow: '0 3px 10px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
            <CardContent>
              <Typography variant="h5">Address</Typography>
              <Typography variant="body2">
                KL UNIVERSITY, VADHESHWARAM
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card variant="outlined" style={{ height: '100%', boxShadow: '0 3px 10px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
            <CardContent>
              <Typography variant="h5">Phone</Typography>
              <Typography variant="body2"> +91-181-010-101 </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card variant="outlined" style={{ height: '100%', boxShadow: '0 3px 10px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
            <CardContent>
              <Typography variant="h5">Emails</Typography>
              <Typography variant="body2">2300030277@kluniversity.in</Typography>
              <Typography variant="body2">2300030278@kluniversity.in</Typography>
              <Typography variant="body2">2300030244@kluniversity.in</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <div style={{ marginTop: '20px' }}>
        <Typography variant="h5">Send Message</Typography>
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', margin: 'auto' }}>
          <TextField
            label="Full Name"
            variant="outlined"
            required
            {...register('fullName', { 
              required: 'Full Name is required',
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: 'Only alphabets are allowed'
              }
            })}
            error={Boolean(errors.fullName)}
            helperText={errors.fullName?.message}
            style={{ margin: '10px 0' }}
            color="warning"
          />
          <TextField
            label="Email"
            variant="outlined"
            required
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: 'Enter a valid email'
              }
            })}
            error={Boolean(errors.email)}
            helperText={errors.email?.message}
            style={{ margin: '10px 0' }}
            color="warning"
          />
          <TextField
            label="Type your Message"
            variant="outlined"
            required
            multiline
            rows={4}
            {...register('message', { required: 'Message is required' })}
            error={Boolean(errors.message)}
            helperText={errors.message?.message}
            style={{ margin: '10px 0' }}
            color="warning"
          />
          <Button variant="contained" color="warning" type="submit">
            Send
          </Button>
        </form>

        {/* Success or error message display */}
        {messageSent && (
          <Typography variant="body1" align="center" style={{ marginTop: '20px', color: messageSent.includes('successfully') ? 'green' : 'red' }}>
            {messageSent}
          </Typography>
        )}
      </div>
    </div>
  );
};

export default Contact;