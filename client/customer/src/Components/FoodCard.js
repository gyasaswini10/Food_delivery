import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const FoodCard = ({ item }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/details/${item.id}`); // Navigate to details page with the item ID
    };

    return (
        <Card 
            onClick={handleCardClick} 
            sx={{ 
                cursor: 'pointer', 
                width: 300, 
                height: 300, 
                margin: 2, 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between' 
            }}
        >
            <CardMedia
                component="img"
                alt={item.title}
                height="140"
                image={item.imageUrl}
                sx={{ objectFit: 'cover' }} 
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="div">
                    {item.title}
                </Typography>
                <Typography color="text.secondary">{item.offer}</Typography>
                <Typography variant="body2" color="text.secondary">{item.rating}</Typography>
                <Typography variant="body1" component="div">{item.price}</Typography>
                <Typography variant="body2" color="text.secondary">{item.deliveryTime}</Typography>
            </CardContent>
        </Card>
    );
};

export default FoodCard;
