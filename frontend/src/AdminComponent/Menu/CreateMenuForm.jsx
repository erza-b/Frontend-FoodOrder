import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { useDispatch, useSelector } from 'react-redux';
import { createMenuItem } from '../../component/State/Menu/Action';
import { uploadImageToCloudinary } from '../Util/UploadToCloudinary';
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CloseIcon from '@mui/icons-material/Close';
import { InputLabel } from '@mui/material';

const initialValues = {
  name: "",
  description: "",
  price: "",
  category: "",
  vegetarian: true,
  seasonal: false,
  images: [],
};

const CreateMenuForm = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { restaurant } = useSelector(store => store);
  const [formData, setFormData] = useState(initialValues);
  const [uploadImage, setUploadImage] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  
  const handleSubmit = async (e) => {
  e.preventDefault();
  const reqData = {
    name: formData.name,
    description: formData.description, // Include description
    price: parseFloat(formData.price), // Include price and parse it to float
  };
  try {
    await dispatch(createMenuItem({ reqData, jwt }));
    setAlertMessage("Menu created successfully");
    setFormData(initialValues);
  } catch (error) {
    setAlertMessage("Error creating menu");
  }
};

  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    setUploadImage(true);

    try {
      // Call the uploadImageToCloudinary function
      const image = await uploadImageToCloudinary(file);

      // Update the state with the uploaded image URL
      setFormData(prevState => ({
        ...prevState,
        images: [...prevState.images, image]
      }));
    } catch (error) {
      console.error("Error uploading image:", error);
      // Handle error if necessary
    } finally {
      setUploadImage(false);
    }
  };
    const handleRemoveImage = (index) => {
      const updatedImages = [...formData.images];
      updatedImages.splice(index, 1);
      setFormData(prevState => ({
        ...prevState,
        images: updatedImages
      }));
    };
  
    return (
      <div className=''>
        <div className='p-5'>
          <h1 className='text-gray-400 text-center text-xl pb-10'>Add new Menu</h1>
          <div className="mx-auto" style={{ width: '400px' }}>
            {alertMessage && <div className="text-red-500">{alertMessage}</div>}
            <form className="space-y-5" onSubmit={handleSubmit}>
              <input
                accept="image/*"
                id="fileInput"
                style={{ display: "none" }}
                onChange={handleImageChange}
                type="file"
              />
              <label className="relative" htmlFor="fileInput">
                <span className="w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-600">
                  <AddPhotoAlternateIcon className="text-white" />
                </span>
                {uploadImage && (
                  <div className="absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center">
                    <CircularProgress />
                  </div>
                )}
              </label>
              <div className="flex flex-wrap gap-2">
                {formData.images.map((image, index) => (
                  <div className="relative" key={index}>
                    <img
                      className="w-24 h-24 object-cover"
                      src={image}
                      alt=""
                    />
                    <IconButton
                      size="small"
                      sx={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        outline: "none",
                      }}
                      onClick={() => handleRemoveImage(index)}
                    >
                      <CloseIcon sx={{ fontSize: "1rem" }} />
                    </IconButton>
                  </div>
                ))}
              </div>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Name"
                variant="outlined"
                onChange={handleInputChange}
                value={formData.name}
              />
              <TextField
                fullWidth
                id="description"
                name="description"
                label="Description"
                variant="outlined"
                onChange={handleInputChange}
                value={formData.description}
              />
              <TextField
                fullWidth
                id="price"
                name="price"
                label="Price"
                variant="outlined"
                onChange={handleInputChange}
                value={formData.price}
              />
              <FormControl fullWidth>
                <InputLabel id="category-label">Category</InputLabel>
                <Select
  labelId="category-label"
  id="category"
  value={formData.category} // This should be the id of the selected category
  label="Category"
  onChange={handleInputChange}
  name="category"
>
  {restaurant.categories?.map((item) => (
    <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem> // Display the name, but set the value to the id
  ))}
</Select>

              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="vegetarian-label">Is Vegetarian</InputLabel>
                <Select
                  labelId="vegetarian-label"
                  id="vegetarian"
                  value={formData.vegetarian}
                  label="Is Vegetarian"
                  onChange={handleInputChange}
                  name="vegetarian"
                >
                  <MenuItem value={true}>Yes</MenuItem>
                  <MenuItem value={false}>No</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="seasonal-label">Is Seasonal</InputLabel>
                <Select
                  labelId="seasonal-label"
                  id="seasonal"
                  value={formData.seasonal}
                  label="Is Seasonal"
                  onChange={handleInputChange}
                  name="seasonal"
                >
                  <MenuItem value={true}>Yes</MenuItem>
                  <MenuItem value={false}>No</MenuItem>
                </Select>
              </FormControl>
              <Button variant="contained" color="primary" type="submit">
                Create Menu
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default CreateMenuForm;