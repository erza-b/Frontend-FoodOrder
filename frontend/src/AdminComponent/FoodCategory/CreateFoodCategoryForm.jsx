import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'; // Import Button from Material-UI



const CreateFoodCategoryForm=()=>{
    const [formData, setFormData]=useState({categoryName:"",restaurantId:""})
    const handleSumbit =()=>{

        const data={
            name:formData.categoryName,
            restaurantId:{
                id:1,
            },
        };
        console.log(data)
    };
    const handleInputChange=(e) =>{
        const{name,value}=e.target
        setFormData({
            ...formData,[name]:value
        })
    }
    return (
        <div className=''>
            <div className='p-5'>
                <h1 className='test-gray-400 text-center text-xl pb-10'>Create Category</h1>
      <form  className="space-y-5"onSubmit={handleSumbit}>
      <TextField
              fullWidth
              id="categoryName"
              name="categoryName"
              label="Cusine Type"
              variant="outlined"
              onChange={handleInputChange}
              value={formData.categoryName}
            ></TextField>

            <Button variant="contained" type="submit">
                Create Category
            </Button>

      </form>
            </div>
        </div>
    );
};

export default CreateFoodCategoryForm