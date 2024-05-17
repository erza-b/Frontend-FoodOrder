import React, { useEffect, useState } from 'react'; // Import React and useState hook
import Modal from '@mui/material/Modal'; // Import Modal component from Material-UI
import { Box, Card, CardActions, CardHeader } from '@mui/material'; // Import necessary Material-UI components
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CreateIcon from '@mui/icons-material/Create';
import IconButton from '@mui/material/IconButton';
import { Delete } from '@mui/icons-material';
import CreateIngredientCategoryForm from './CreateIngredientCategoryForm';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredientCategory } from '../../component/State/Ingredients/Action';

const orders = [1, 1, 1, 1, 1, 1, 1];

const style = {
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
export default function IngredientCategoryTable() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispatch=useDispatch()
    const {restaurant,ingredients}=useSelector(store=>store)
    const jwt=localStorage.getItem('jwt')


    useEffect(()=>{
        dispatch(getIngredientCategory({id:restaurant.usersRestaurant.id,jwt}))
    },[])
  
    return (
        <Box>
            <Card className='mt-1'>
                <CardHeader action={
                    <IconButton onClick={handleOpen}aria-label="settings">
                        <CreateIcon />
                    </IconButton>
                }
                    title={"Ingredient Category"}
                    sx={{ pt: 2, alignItems: "center" }}
                />
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Id</TableCell>
                                <TableCell align="left">Name</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {ingredients.categroy.map((item) => (
                                <TableRow
                                    key={item.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {item.id}
                                    </TableCell>
                                    <TableCell align="left">{item.name}</TableCell>
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
    <CreateIngredientCategoryForm/>
  </Box>
</Modal>
          
        </Box>
    )
}
