import React, { useEffect, useState } from 'react';
import { Box, Card, CardActions, CardContent, CardHeader, Modal, Typography, Button } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import CreateEventForm from './CreateEventForm';
import { useDispatch, useSelector } from 'react-redux';
import { getEvents } from '../../component/State/Event/Action';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const EventTable = () => {
    const { restaurant } = useSelector((store) => store);
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        if (restaurant?.userRestaurant?.id) {
            console.log('Fetching events...');
            dispatch(getEvents({ jwt, restaurantId: restaurant.userRestaurant.id }));
        }
    }, [dispatch, jwt, restaurant?.userRestaurant?.id]);

    // Debugging: Check the events data
    useEffect(() => {
        console.log('Events:', restaurant.events);
    }, [restaurant.events]);

    return (
        <Box>
            <Card className='mt-1'>
                <CardHeader
                    action={
                        <Button onClick={handleOpen} startIcon={<CreateIcon />} variant="outlined" size="small">
                            Create Event
                        </Button>
                    }
                    title="Events"
                    sx={{ pt: 2, alignItems: "center" }}
                />
                <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="space-around" p={2}>
                    {restaurant.events.map((event) => (
                        <Card key={event.id} sx={{ maxWidth: 300, m: 2 }}>
                            {/* Display the image if available */}
                            {event.image && (
                                <img src={event.image} alt="Event" style={{ width: '100%', height: 'auto' }} />
                            )}
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {event.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    ID: {event.id}
                                </Typography>
                                {/* Add more event details here */}
                            </CardContent>
                            <CardActions>
                                {/* Add action buttons if needed */}
                            </CardActions>
                        </Card>
                    ))}
                </Box>
            </Card>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{ ...style, width: 400 }}>
                    <CreateEventForm />
                </Box>
            </Modal>
        </Box>
    );
}

export default EventTable;
