import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { createIngredient } from '../../component/State/Ingredients/Action';

const CreateIngredientForm = () => {
    const { restaurant, ingredients } = useSelector(store => store);
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const [formData, setFormData] = useState({
        name: "",
        categoryId: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (restaurant && restaurant.usersRestaurant && restaurant.usersRestaurant.id) {
            const data = {
                ...formData,
                restaurantId: restaurant.usersRestaurant.id
            };
            dispatch(createIngredient({ data, jwt }));
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData, [name]: value
        });
    };

    return (
        <div className=''>
            <div className='p-5'>
                <h1 className='text-gray-400 text-center text-xl pb-10'>Create Ingredient</h1>
                <form className="space-y-5" onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        id="name"
                        name="name"
                        label="Name"
                        variant="outlined"
                        onChange={handleInputChange}
                        value={formData.name}
                    />
                    <FormControl fullWidth>
                        <InputLabel id="category-label">Category</InputLabel>
                        <Select
                            labelId="category-label"
                            id="category"
                            value={formData.categoryId}
                            label="Category"
                            onChange={handleInputChange}
                            name="categoryId"
                        >
                            {ingredients && ingredients.category && ingredients.category.map((item) => (
                                <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Button variant="contained" type="submit">
                        Create Ingredient
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default CreateIngredientForm;
