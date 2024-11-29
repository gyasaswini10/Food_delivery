import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  TextField,
  Grid,
} from '@mui/material';
import { QRCodeSVG } from 'qrcode.react';
import { Link } from 'react-router-dom';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [upiID, setUpiID] = useState('');
  const [upiConfirmID, setUpiConfirmID] = useState(''); // State for UPI confirmation
  const [error, setError] = useState('');
  const [confirmError, setConfirmError] = useState(''); // State for confirmation error

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
    setUpiID('');
    setUpiConfirmID('');
    setError('');
    setConfirmError('');
  };

  const handleUPIChange = (e) => {
    setUpiID(e.target.value); // Simply set the value without immediate validation
    if (!/^[a-zA-Z0-9._]+@[a-zA-Z0-9]+$/.test(e.target.value) && e.target.value !== '') {
      setError('Please enter a valid UPI ID.');
    } else {
      setError('');
    }
  };

  const handleUPIConfirmChange = (e) => {
    setUpiConfirmID(e.target.value);
    if (e.target.value !== upiID) {
      setConfirmError('UPI IDs do not match.');
    } else {
      setConfirmError('');
    }
  };

  return (
    <Box style={{ padding: '20px', backgroundColor: '#f4f4f9' }}>
      <Typography variant="h4" gutterBottom>
        Payment Options
      </Typography>

      <RadioGroup value={paymentMethod} onChange={handlePaymentChange}>
        <FormControlLabel value="cash" control={<Radio />} label="Cash on Delivery" />
        <FormControlLabel value="upi" control={<Radio />} label="Pay with UPI" />
        <FormControlLabel value="qr" control={<Radio />} label="Pay with QR Code" />
        <FormControlLabel value="card" control={<Radio />} label="Pay with Card" />
      </RadioGroup>

      {paymentMethod === 'card' && (
        <Box mt={2}>
          <Typography variant="h6">Enter Card Details</Typography>
          <TextField label="Name on Card" variant="outlined" fullWidth margin="normal" required />
          <TextField label="Credit Card Number" variant="outlined" fullWidth margin="normal" required />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField label="Exp Month" variant="outlined" fullWidth margin="normal" required />
            </Grid>
            <Grid item xs={6}>
              <TextField label="Exp Year" variant="outlined" fullWidth margin="normal" required />
            </Grid>
          </Grid>
          <TextField label="CVV" variant="outlined" fullWidth margin="normal" required />
        </Box>
      )}

      {paymentMethod === 'upi' && (
        <Box mt={2}>
          <Typography variant="h6">Pay through UPI</Typography>
          <TextField
            label="Enter UPI ID"
            variant="outlined"
            fullWidth
            margin="normal"
            value={upiID}
            onChange={handleUPIChange}
            required
            error={!!error}
            helperText={error}
          />
          <TextField
            label="Confirm UPI ID"
            variant="outlined"
            fullWidth
            margin="normal"
            value={upiConfirmID}
            onChange={handleUPIConfirmChange}
            required
            error={!!confirmError}
            helperText={confirmError}
          />
        </Box>
      )}

      {paymentMethod === 'qr' && (
        <Box mt={2} display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h6">Pay with QR Code</Typography>
          <QRCodeSVG value="Payment via QR Code" />
        </Box>
      )}

      {paymentMethod === 'cash' && (
        <Box mt={2} display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h6">Cash on Delivery</Typography>
          <Typography variant="body1">Please prepare the cash for delivery.</Typography>
        </Box>
      )}

      <Link to="/RealTimeTracking" style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="warning" style={{ marginTop: '20px' }}>
          {paymentMethod === 'cash' ? 'Complete Order' : 'Make Payment'}
        </Button>
      </Link>
    </Box>
  );
};

export default Payment;