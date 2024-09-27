import React from 'react';
import { Card, CardContent, Typography, TextField, Button, Grid } from '@mui/material';

const Contact = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f4f6f8' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        Lorem ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem ipsum has been the industry's standard dummy text ever since the 1500s.
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {/** Each Grid item has a fixed height for equal card sizes **/}
        <Grid item xs={12} sm={4}>
          <Card variant="outlined" style={{ height: '100%', boxShadow: '0 3px 10px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
            <CardContent>
              <Typography variant="h5">Address</Typography>
              <Typography variant="body2">
                4671 Sugar Camp Road, Owatonna, Minnesota, 56080
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card variant="outlined" style={{ height: '100%', boxShadow: '0 3px 10px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
            <CardContent>
              <Typography variant="h5">Phone</Typography>
              <Typography variant="body2">571-457-3231</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card variant="outlined" style={{ height: '100%', boxShadow: '0 3px 10px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
            <CardContent>
              <Typography variant="h5">Email</Typography>
              <Typography variant="body2">ntamerwae@mail.com</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <div style={{ marginTop: '20px' }}>
        <Typography variant="h5">Send Message</Typography>
        <form style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', margin: 'auto' }}>
          <TextField label="Full Name" variant="outlined" required style={{ margin: '10px 0' }} />
          <TextField label="Email" variant="outlined" required style={{ margin: '10px 0' }} />
          <TextField
            label="Type your Message"
            variant="outlined"
            required
            multiline
            rows={4}
            style={{ margin: '10px 0' }}
          />
          <Button variant="contained" color="warning" type="submit">
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
