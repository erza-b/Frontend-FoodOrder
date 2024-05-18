import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'; // Import Button from Material-UI
import { createIngredientCategory } from '../../component/State/Ingredients/Action';
import { useDispatch, useSelector } from 'react-redux';



const CreateIngredientCategoryForm=()=>{
    
    const dispatch=useDispatch();
    const jwt=localStorage.getItem("jwt")
    const {restaurant} = useSelector(store=>store)
    const [formData, setFormData]=useState({
        name:"",
    })
    const handleSumbit =(e)=>{
           e.preventDefault()
      const data={name:formData.name,restaurantId: restaurant.usersRestaurant.id}
        console.log(formData)
        dispatch (createIngredientCategory({data,jwt}))

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