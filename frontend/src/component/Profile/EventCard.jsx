import React from 'react';
import { Card, CardMedia, Typography, CardContent, CardActions, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const EventCard = ({ event }) => {
  const handleDelete = () => {
    // Implement delete functionality here
    console.log('Deleting event:', event.id);
  };

  return (
    <div>
      <Card sx={{ width: 345 }}>
        <CardMedia
          sx={{ height: 345 }}
          image={event.image}
        />
        <CardContent>
          <Typography variant='h5'>{event.title}</Typography>
          <Typography variant='body2'>{event.description}</Typography>
          <div className='py-2 space-y-2'>
            <p>{event.location}</p>
            <p className='text-sm text-blue-500'>{event.startDate}</p>
            <p className='text-sm text-red-500'>{event.endDate}</p>
          </div>
        </CardContent>
        {/* Optional: Delete button */}
        {/* <CardActions>
          <IconButton onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </CardActions> */}
      </Card>
    </div>
  );
};

export default EventCard;
