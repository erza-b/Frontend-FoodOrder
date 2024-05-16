import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'; // Import Button from Material-UI



const CreateIngredientCategoryForm=()=>{
    const [formData, setFormData]=useState({
        name:"",
    })
    const handleSumbit =()=>{

      
        console.log(formData)
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
                <h1 className='test-gray-400 text-center text-xl pb-10'>Create Ingredient Category</h1>
      <form  className="space-y-5"onSubmit={handleSumbit}>
      <TextField
              fullWidth
              id="name"
              name="name"
              label="category"
              variant="outlined"
              onChange={handleInputChange}
              value={formData.name}
            ></TextField>

            <Button variant="contained" type="submit">
                Create Category
            </Button>

      </form>
            </div>
        </div>
    );
};

export default CreateIngredientCategoryForm