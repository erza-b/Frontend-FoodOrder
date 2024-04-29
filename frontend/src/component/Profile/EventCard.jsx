import React from 'react'
import { Card, CardMedia, Typography,CardContent, CardActions, IconButton} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

export const EventCard = () => {
  return (
    <div>
        <Card sx={{width:345}}>
            <CardMedia
            sx={{height:345}}
             image='/images/CardMedia1.jpeg'/>
             <CardContent>
                <Typography variant='h5'>
                    Indian Fast Food
                </Typography>
                <Typography variant='body2'>
                    50% off on your first order
                </Typography>
                <div className='py-2 space-y-2'>
                    <p>{"mumbai"}</p>
                    <p className='text-sm text-blue-500'>April 21 2024 12:00 AM</p>
                    <p className='text-sm text-red-500'>April 22 2024 12:00 AM</p>
                </div>
             </CardContent>
             {false && <CardActions>
                <IconButton>
                    <DeleteIcon/>
                </IconButton>
             </CardActions>}
        </Card>
    </div>
  )
}
