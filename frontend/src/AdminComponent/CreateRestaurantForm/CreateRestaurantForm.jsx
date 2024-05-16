import React, { useState } from 'react';
import { CircularProgress, Grid, IconButton, TextField } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { useFormik } from 'formik';
import CloseIcon from '@mui/icons-material/Close';

const initialValues = {
    name: "",
    description: "",
    cuisineType: "",
    streetAddress: "",
    city: "",
    stateProvince: "",
    postalCode: "",
    country: "",
    email: "",
    mobile: "",
    twitter: "",
    instagram: "",
    openingHours: "Mon-Sun : 9:00 AM - 12:00 PM",
    images: []
}

const CreateRestaurantForm = () => {
    const [uploadImage, setUploadImage] = useState(false);
    const formik = useFormik({
        initialValues,
        onSubmit: () => {

        }
    });

    const handleImageChange = (e) => {
        // Handle image change here
    }

    const handleRemoveImage = () => {
        // Handle image removal here
    }

    return (
        <div className='py-10 px-5 lg:flex items-center justify-center min-h-screen'>
            <div className='lg:max-w-4xl'>
                <h1 className='font-bold text-2xl text-center py-2'>
                    Add new Restaurant
                </h1>

                {/* Image upload section */}
                <input
                    accept='image/*'
                    id='fileInput'
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                    type="file"
                />

                <div className='flex flex-wrap gap-2 items-center'>
                    {[1, 1, 1].map((image, index) => (
                        <div className='relative' key={index}>
                            <img
                                className='w-24 h-24 object-cover'
                                src="/images/burger-with-melted-cheese.jpg"
                                alt=""
                            />
                            <IconButton
                                size='small'
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    right: 0,
                                    outline: "none",
                                }}
                                onClick={() => handleRemoveImage(index)}
                            >
                                <CloseIcon sx={{ fontSize: '1rem' }} />
                            </IconButton>
                        </div>
                    ))}

                    <label className='relative' htmlFor='fileInput'>
                        <span className='w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-600'>
                            <AddPhotoAlternateIcon className='text-white' />
                        </span>
                        {uploadImage && 
                            <div className='absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center'>
                                <CircularProgress />
                            </div>
                        }
                    </label>
                </div>

               
                <form onSubmit={formik.handleSubmit} className='space-y-4'>
                    <Grid container spacing={2}>
                        <Grid className='flex flex-wrap gap-5' item xs={12}>
                            <TextField
                                fullWidth
                                id="name"
                                name="name"
                                label="Name"
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="description"
                                name="description"
                                label="Description"
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.description}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="cuisineType"
                                name="cuisineType"
                                label="Cuisine Type"
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.cuisineType}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="openingHours"
                                name="openingHours"
                                label="Opening Hours"
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.openingHours}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="streetAddress"
                                name="streetAddress"
                                label="Street Address"
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.streetAddress}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="city"
                                name="city"
                                label="City"
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.city}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="stateProvince"
                                name="stateProvince"
                                label="State"
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.stateProvince}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="postalCode"
                                name="postalCode"
                                label="Postal Code"
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.postalCode}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="country"
                                name="country"
                                label="Country"
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.country}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="email"
                                name="email"
                                label="Email"
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="mobile"
                                name="mobile"
                                label="Mobile"
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.mobile}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="twitter"
                                name="twitter"
                                label="Twitter"
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.twitter}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="instagram"
                                name="instagram"
                                label="Instagram"
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.instagram}
                            />
                        </Grid>
                    </Grid>
                </form>
            </div>
        </div>
    );
}

export default CreateRestaurantForm;
