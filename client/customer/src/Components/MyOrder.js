import React from 'react';
import { Container, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function MyOrder() {
  const orders = [
    { id: 1, item: 'Greek Salad', price: '$12', quantity: 2, total: '$24' },
    { id: 2, item: 'Chicken Salad', price: '$24', quantity: 1, total: '$24' },
  ];

  return (
    <Container maxWidth="md">
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>
          My Orders
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: (theme) => theme.palette.warning.main }}> {/* Using MUI warning color */}
                <TableCell sx={{ color: 'white' }}>Title</TableCell>
                <TableCell sx={{ color: 'white' }}>Price</TableCell>
                <TableCell sx={{ color: 'white' }}>Quantity</TableCell>
                <TableCell sx={{ color: 'white' }}>Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.item}</TableCell>
                  <TableCell>{order.price}</TableCell>
                  <TableCell>{order.quantity}</TableCell>
                  <TableCell>{order.total}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}

export default MyOrder;
