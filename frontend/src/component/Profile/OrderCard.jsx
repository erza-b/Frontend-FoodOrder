import React from 'react';
import { Card, Button } from '@mui/material'; 
export const OrderCard = () => {
  return (
    <Card className='flex justify-between items-center p-5'>
      <div className='flex items-center space-x-5'>
        <img className="h-16 w-16" src="frontend\public\images\order1.jpg" alt="" />
        <div>
          <p>Biryani</p>
          <p>$399</p>
        </div>
      </div>
      <div>
        <Button className="cursor-not-allowed">
          completed
        </Button>
      </div>
    </Card>
  )
}

export default OrderCard;
