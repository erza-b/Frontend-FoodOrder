import React, { useState } from "react";
import { CircularProgress, Grid, IconButton, TextField } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { useFormik } from "formik";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import { uploadImageToCloudinary } from "../Util/UploadToCloudinary";
import { useDispatch } from "react-redux";
import { createRestaurant } from "../../component/State/Restaurant/Action";
import * as Yup from "yup"; // Import Yup for validation

const initialValues = {
  name: "",
  description: "",
  cuisineType: "",
  street: "",
  city: "",
  postalCode: "",
  email: "",
  mobile: "",
  twitter: "",
  instagram: "",
  openingHours: "Mon-Sun : 9:00 AM - 12:00 PM", // Corrected field name
  images: [],
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  description: Yup.string().required("Description is required"),
  cuisineType: Yup.string().required("Cuisine type is required"),
  // Add validation rules for other fields
});

const CreateRestaurantForm = () => {
  const [uploadImage, setUploadImage] = useState(false);
  const dispatch = useDispatch(); // Corrected import

  const jwt = localStorage.getItem("jwt");

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      const data = {
        name: values.name,
        description: values.description,
        cuisineType: values.cuisineType,
        address: {
          street: values.streetAddress,
          city: values.city,
          postalCode: values.postalCode,
         
        },
        contactInformation: {
          email: values.email,
          mobile: values.mobile,
          twitter: values.twitter,
          instagram: values.instagram,
        },
        openingHours: values.openingHours, // Corrected field name
        images: values.images,
      };
      console.log("data ---", data);

      dispatch(createRestaurant(data, jwt)); // Pass token as a separate argument
    },
  });

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    setUploadImage(true);
    const image = await uploadImageToCloudinary(file);
    console.log("image ---", image);
    formik.setFieldValue("images", [...formik.values.images, image]);
    setUploadImage(false);
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...formik.values.images];
    updatedImages.splice(index, 1);
    formik.setFieldValue("images", updatedImages);
  };

  return (
    <div className="py-10 px-5 lg:flex items-center justify-center min-h-screen">
      <div className="lg:max-w-4xl">
        <h1 className="font-bold text-2xl text-center py-2">Add new Restaurant</h1>

        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <Grid container spacing={2}>
            <Grid className="flex flex-wrap gap-5" item xs={12}>
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
                {formik.values.images.map((image, index) => (
                  <div
                  className="relative" key={index}>
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
          </Grid>
          <Grid item xs={12}>
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
          <Grid item xs={12} lg={6}>
            <TextField
              fullWidth
              id="cuisineType"
              name="cuisineType"
              label="Cusine Type"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.cuisineType}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
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
              id="street"
              name="street"
              label="Street "
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.street}
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
         
          <Grid item xs={12} lg={4}>
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
          
          <Grid item xs={12} lg={6}>
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
          <Grid item xs={12} lg={6}>
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
          <Grid item xs={12} lg={6}>
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
          <Grid item xs={12} lg={6}>
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
        <Button variant="contained" color="primary" type="submit">
          Create Restaurant
        </Button>
      </form>
    </div>
  </div>
);
};

export default CreateRestaurantForm;
