import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';





const CreateIngredientForm=()=>{
    const [formData, setFormData]=useState({
        name:"",
        ingredientCategoryId:""
    });
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
                <h1 className='test-gray-400 text-center text-xl pb-10'>Create Ingredient</h1>
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

<FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formData.ingredientCategoryId}
                  label="Category"
                  onChange={handleInputChange}
                  name="ingredientCategoryId"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>thirty</MenuItem>

                </Select>
              </FormControl>

            <Button variant="contained" type="submit">
                Create Category
            </Button>

      </form>
            </div>
        </div>
    );
};

export default CreateIngredientForm