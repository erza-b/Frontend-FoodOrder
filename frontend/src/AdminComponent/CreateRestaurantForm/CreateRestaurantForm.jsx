import React, { useState } from 'react';
import { CircularProgress, Grid, IconButton } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { useFormik } from 'formik';
import CloseIcon from '@mui/icons-material/Close';

const CreateRestaurantForm = () => {
    const [uploadImage, setUploadImage] = useState(false);
    const formik = useFormik();

    const handleImageChange = (e) => {
        // Handle image change here
    }
    const handleRemoveImage = () => {

    }

    return (
        <div className='py-10 lg:flex items-center justify-center min-h-screen'>
            <h1 className='font-bold text-2xl text-center py-2'>
                Add new Restaurant
            </h1>
            <form onSubmit={formik.handleSubmit} className='space-y-4'>
                <Grid container spacing={2}>
                    <Grid className='flex flex-wrap gap-5' item xs={12}>

                        <input
                            accept='image/*'
                            id='fileInput'
                            style={{ display: "none" }}
                            onChange={handleImageChange}
                            type="file" />

                        <label className='relative' htmlFor='fileInput'>
                            <span className='w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-600'>
                                <AddPhotoAlternateIcon className='text-white' /> {/* Use imported AddPhotoAlternateIcon */}
                            </span>
                            {
                                uploadImage && <div className='absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center'>
                                    <CircularProgress />
                                </div>
                            }
                        </label>

                        <div className='flex flex-wrap gap-2'>
                            {[1, 1, 1].map((image, index) => <div key={index}>
                                <img className='w-24 h-24 object-cover'
                                    src="public\images\burger-with-melted-cheese.jpg" alt="" />
                                <IconButton
                                    size='small'
                                    sx={{
                                        posiition: 'absolute',
                                        top: 0,
                                        right: 0,
                                        outline: "none",

                                    }}
                                    onClick={() => handleRemoveImage(index)}>
                                    <CloseIcon />
                                </IconButton>
                            </div>)}
                        </div>

                    </Grid>
                </Grid>
            </form>
        </div>
    );
}

export default CreateRestaurantForm;
