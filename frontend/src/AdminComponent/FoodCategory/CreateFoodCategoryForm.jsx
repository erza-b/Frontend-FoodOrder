import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'; // Import Button from Material-UI
import { useDispatch, useSelector } from 'react-redux';
import { createCategoryAction } from '../../component/State/Restaurant/Action';



const CreateFoodCategoryForm=()=>{
    const {restaurant}=useSelector(store=>store);
    const dispatch=useDispatch()
    const [formData, setFormData]=useState({categoryName:"",restaurantId:""})
    const handleSumbit =(e)=>{
        e.preventDefault();

        const data={
            name:formData.categoryName,
            restaurantId:{
                id:1,
            },
        };
        dispatch(createCategoryAction({reqData:data,jwt:localStorage.getItem("jwt")}))
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
                <h1 className='test-gray-400 text-center text-xl pb-10'>Create Food Category</h1>
      <form  className="space-y-5"onSubmit={handleSumbit}>
      <TextField
              fullWidth
              id="categoryName"
              name="categoryName"
              label="Food Category"
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