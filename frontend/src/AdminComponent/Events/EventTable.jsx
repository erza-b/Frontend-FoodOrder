import React, { useEffect, useState } from 'react';
import { Box, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, IconButton, Modal, Paper, Typography } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import CreateEventForm from './CreateEventForm';
import { useDispatch, useSelector } from 'react-redux';
import { getEvents } from '../../component/State/Event/Action';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    maxWidth: '90%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const EventCard = ({ event }) => {
    return (
        <Card sx={{ maxWidth: 345, marginBottom: 2 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="194"
                    image={event.image} // Assuming image is provided in the event data
                    alt={event.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {event.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Location: {event.location}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Start Date: {event.startedAt}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        End Date: {event.endsAt}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {/* You can add more actions here if needed */}
            </CardActions>
        </Card>
    );
};

const EventTable = () => {
    const { restaurant } = useSelector((store) => store);
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { events, loading, error } = useSelector((state) => state.events);

    useEffect(() => {
        if (restaurant?.userRestaurant?.id) {
            console.log('Fetching events...');
            dispatch(getEvents({ jwt, restaurantId: restaurant.userRestaurant.id }));
        }
    }, [dispatch, jwt, restaurant?.userRestaurant?.id]);

    return (
        <Box>
            <Card className='mt-1'>
                <CardHeader
                    action={
                        <IconButton onClick={handleOpen} aria-label="settings">
                            <CreateIcon />
                        </IconButton>
                    }
                    title="Events"
                    sx={{ pt: 2, alignItems: "center" }}
                />
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', p: 2 }}>
                    {loading ? (
                        <Typography variant="body1" align="center">
                            Loading...
                        </Typography>
                    ) : error ? (
                        <Typography variant="body1" align="center">
                            Error: {error.message}
                        </Typography>
                    ) : (events && events.length > 0) ? (
                        events.map((event) => (
                            <EventCard key={event.id} event={event} />
                        ))
                    ) : (
                        <Typography variant="body1" align="center">
                            No events found
                        </Typography>
                    )}
                </Box>
            </Card>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <CreateEventForm />
                </Box>
            </Modal>
        </Box>
    );
}

export default EventTable;
