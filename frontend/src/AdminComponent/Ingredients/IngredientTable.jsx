// IngredientTable Component:

import React, { useEffect, useState } from 'react';
import { Box, Card, CardActions, CardHeader, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Modal, IconButton } from '@mui/material';
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
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        if (restaurant && restaurant.usersRestaurant && restaurant.usersRestaurant.id) {
            dispatch(getIngredientsOfRestaurant({ id: restaurant.usersRestaurant.id, jwt }));
        }
    }, [restaurant]);

    return (
        <Box>
            <Card className="mt-1">
                <CardHeader
                    action={
                        <IconButton onClick={handleOpen} aria-label="settings">
                            <CreateIcon />
                        </IconButton>
                    }
                    title={"Ingredients"}
                    sx={{ pt: 2, alignItems: "center" }}
                />
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Id</TableCell>
                                <TableCell align="left">Name</TableCell>
                                <TableCell align="left">Quantity</TableCell>
                                <TableCell align="left">Category</TableCell>
                                <TableCell align="left">Stock</TableCell>
                                <TableCell align="left">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {ingredients && ingredients.ingredients && ingredients.ingredients.map((ingredient) => (
                                <TableRow key={ingredient.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">{ingredient.id}</TableCell>
                                    <TableCell align="left">{ingredient.name}</TableCell>
                                    <TableCell align="left">{ingredient.quantity}</TableCell>
                                    <TableCell align="left">{ingredient.ingredientCategory.name}</TableCell>
                                    <TableCell align="left">{ingredient.stock}</TableCell>
                                    <TableCell align="left">
                                        <Button onClick={() => dispatch(updateStockOfIngredient({ id: ingredient.id, jwt }))}>Update Stock</Button>
                                    </TableCell>
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
