// IngredientTable.js
import React, { useEffect, useState } from 'react';
import { Box, Card, CardHeader, Modal, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredientsOfRestaurant, updateStockOfIngredient, createIngredient } from '../../component/State/Ingredients/Action'; // Import createIngredient action
import CreateIngredientForm from './CreateIngredientForm'; // Import CreateIngredientForm component

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function IngredientTable() {
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const { restaurant, ingredients } = useSelector(store => store);
    const [open, setOpen] = useState(false);

    // Fetch ingredients when component mounts or restaurant changes
    useEffect(() => {
        if (restaurant?.userRestaurant?.id) {
            dispatch(getIngredientsOfRestaurant({ id: restaurant.userRestaurant.id, jwt }));
        }
    }, [dispatch, jwt, restaurant?.userRestaurant?.id]);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box>
            <Card className="mt-1">
                <CardHeader
                    action={
                        <IconButton onClick={handleOpen} aria-label="settings">
                            <CreateIcon />
                        </IconButton>
                    }
                    title="Ingredients"
                    sx={{ pt: 2, alignItems: "center" }}
                />
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Id</TableCell>
                                <TableCell align="left">Name</TableCell>
                                <TableCell align="left">Category ID</TableCell> {/* Change label to "Category ID" */}
                                
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {ingredients?.ingredients?.map((ingredient) => (
                                <TableRow key={ingredient.id}>
                                    <TableCell>{ingredient.id}</TableCell>
                                    <TableCell>{ingredient.name}</TableCell>
                                    <TableCell>{ingredient.category.id}</TableCell> {/* Display category ID */}
                                
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <CreateIngredientForm />
                </Box>
            </Modal>
        </Box>
    );
}
