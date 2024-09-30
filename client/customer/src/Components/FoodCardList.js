import React from 'react';
import FoodCard from './FoodCard';
import Grid from '@mui/material/Grid';

const FoodCardList = ({ items }) => {
    return (
        <Grid container spacing={2} justifyContent="center">
            {items.map(item => (
                <Grid item key={item.id}>
                    <FoodCard item={item} />
                </Grid>
            ))}
        </Grid>
    );
};

export default FoodCardList;
