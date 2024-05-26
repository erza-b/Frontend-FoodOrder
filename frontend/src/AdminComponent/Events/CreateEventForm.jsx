import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'; 
import { useDispatch, useSelector } from 'react-redux';
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { createEvent } from '../../component/State/Event/Action'; // Update to event action import
import Grid from '@mui/material/Grid'; // Import Grid from Material-UI

const CreateEventForm = () => {
    const { restaurant } = useSelector(store => store);
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({ 
        image: "", 
        location: "", 
        name: "", 
        startedAt: null, 
        endsAt: null 
    });

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleDateChange = (date, dateType) => {
        setFormData({ ...formData, [dateType]: date });
      };
    const handleSumbit = (e) => {
        e.preventDefault();

        const data = {
            ...formData,
            restaurantId: restaurant?.userRestaurant?.id, // Ensure null checking
        };
        dispatch(createEvent({ reqData: data, jwt: localStorage.getItem("jwt") }));
        setFormData({ 
            image: "", 
            location: "", 
            name: "", 
            startedAt: null, 
            endsAt: null 
        }); // Reset form data after submission
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div className=''>
            <div className='p-5'>
                <h1 className='test-gray-400 text-center text-xl pb-10'>Create Event</h1>
                <form className="space-y-5" onSubmit={handleSumbit}>

                    <TextField
                        fullWidth
                        id="image"
                        name="image"
                        label="Image URL"
                        variant="outlined"
                        onChange={handleInputChange}
                        value={formData.image}
                    />
                    <TextField
                        fullWidth
                        id="location"
                        name="location"
                        label="Location"
                        variant="outlined"
                        onChange={handleInputChange}
                        value={formData.location}
                    />
                    <TextField
                        fullWidth
                        id="name"
                        name="name"
                        label="Event Name"
                        variant="outlined"
                        onChange={handleInputChange}
                        value={formData.name}
                    />
                    <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label="Start Date and Time"
                    value={formData.startedAt}
                    onChange={(newValue) => handleDateChange(newValue, 'startedAt')}
                    inputFormat="MM/DD/YYYY hh:mm A"
                    fullWidth
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label="End Date and Time"
                    value={formData.endsAt}
                    onChange={(newValue) => handleDateChange(newValue, 'endsAt')}
                    inputFormat="MM/DD/YYYY hh:mm A"
                    fullWidth
                  />
                </LocalizationProvider>
              </Grid>
                    <Button variant="contained" type="submit">
                        Create Event
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default CreateEventForm;