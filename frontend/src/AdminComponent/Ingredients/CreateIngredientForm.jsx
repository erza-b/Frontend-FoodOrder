import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { createIngredient, getIngredientsOfRestaurant } from '../../component/State/Ingredients/Action';

const CreateIngredientForm = () => {
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const { restaurant, ingredients } = useSelector(store => store);
    const [formData, setFormData] = useState({
        name: "",
        categoryId: ""
    });

      
    useEffect(() => {
        if (restaurant?.userRestaurant?.id) {
            console.log("Fetching ingredient categories...");
            dispatch(getIngredientsOfRestaurant({ id: restaurant.userRestaurant.id, jwt }));
        }
    }, [dispatch, jwt, restaurant?.userRestaurant?.id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: formData.name,
            categoryId: formData.categoryId,
            restaurantId: restaurant.userRestaurant.id
        };

        dispatch(createIngredient({ ingredientData: data, jwt }));
        setFormData({
            name: "",
            categoryId: ""
        });
    };

   const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
};


    if (!ingredients || !ingredients.category) {
        return <div>Loading...</div>;
    }

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
                            {ingredients.category.map((item) => (
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
