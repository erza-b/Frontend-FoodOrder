import { Box, Card, CardActions, CardHeader } from '@mui/material'
import React from 'react'
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

const orders = [1, 1, 1, 1, 1, 1, 1]
export default function MenuTable() {
    return (
        <Box>
            <Card className='mt-1'>
                <CardHeader action={
                    <IconButton aria-label="settings">
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
                            {orders.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {1}
                                    </TableCell>
                                    <TableCell align="right">{"image"}</TableCell>
                                    <TableCell align="right">{"codewithzogh@gmail.com"}</TableCell>
                                    <TableCell align="right">{"price"}</TableCell>
                                    <TableCell align="right">{"pizza"}</TableCell>
                                    <TableCell align="right"><IconButton><Delete/></IconButton></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </Box>
    )
}
