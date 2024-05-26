import { Avatar, Box, Card, CardActions, CardHeader, Chip } from '@mui/material'
import React, { useEffect } from 'react'
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
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFoodAction, getMenuItemsByRestaurantId } from '../../component/State/Menu/Action';

const orders = [1, 1, 1, 1, 1, 1, 1]
export default function MenuTable() {
    const dispatch=useDispatch();
    const jwt=localStorage.getItem("jwt")
    const {restaurant,ingredients,menu}=useSelector((store)=>store);
    const navigate =useNavigate();
    useEffect(()=>{
 dispatch(getMenuItemsByRestaurantId({
    restaurantId: restaurant.userRestaurant.id,
    jwt,
    vegetarian:false,
    seasonal:false,
    nonvegan:false,
    foodCategory:""

 }))
    },[])
    const handleDeleteFood=(foodId)=>{
        dispatch(deleteFoodAction({foodId,jwt}))

    }
    return (
        <Box>
            <Card className='mt-1'>
                <CardHeader action={
                    <IconButton onClick={()=> navigate("/admin/restaurants/add-menu")} aria-label="settings">
                        <CreateIcon />
                    </IconButton>
                }
                    title={"Menu"}
                    sx={{ pt: 2, alignItems: "center" }}
                />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Image</TableCell>
                                <TableCell align="right">Title</TableCell>
                                <TableCell align="right">Ingredients</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Avaliability</TableCell>
                                <TableCell align="right">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {menu.menuItems.map((item) => (
                                <TableRow
                                    key={item.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                    <Avatar src={item.images[0]}></Avatar>
                                    </TableCell>
                                    <TableCell align="right">{item.name}</TableCell>
                                    <TableCell align="right">{item.ingredients.map((ingredient)=><Chip label={ingredient.name}/>)}</TableCell>
                                    <TableCell align="right">€{item.price}</TableCell>
                                    <TableCell align="right">{item.available?"in_stoke" : "out_of_stoke"}</TableCell>
                                    <TableCell align="right">
                                        <IconButton color="primary" onClick={()=>handleDeleteFood(item.id)}>
                                            <Delete/>
                                        </IconButton>
                                            </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </Box>
    )
}