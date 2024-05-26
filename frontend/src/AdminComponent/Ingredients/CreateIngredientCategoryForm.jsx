import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { createIngredientCategory } from '../../component/State/Ingredients/Action';

const CreateIngredientCategoryForm = () => { 
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const { restaurant } = useSelector(store => store);
    const [formData, setFormData] = useState({
        name: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const reqData = { name: formData.name };
        dispatch(createIngredientCategory({ reqData, jwt }));
        // Reset the form after submission
        setFormData({ name: "" });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div className=''>
            <div className='p-5'>
                <h1 className='text-gray-400 text-center text-xl pb-10'>Create Ingredient Category</h1>
                <div className="mx-auto" style={{ width: '400px' }}>
                    {/* Place the form inside a div with mx-auto class to center it */}
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            id="name"
                            name="name"
                            label="Category"
                            variant="outlined"
                            onChange={handleInputChange}
                            value={formData.name}
                        />
                        <Button variant="contained" type="submit">
                            Create Category
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateIngredientCategoryForm;
