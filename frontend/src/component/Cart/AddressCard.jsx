import React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';

export const AddressCard = ({ item, showButton, handleSelectAddress }) => {
    return (
        <Card className="flex gap-5 w-64 p-5">
            <div className='flex gap-3'>
                <HomeIcon />
                <div className='space-y-3 text-gray-500'>
                    <h1 className='font-semibold text-lg text-white'>{item.fullName}</h1>
                    <p>{item.streetAddress}, {item.city}, {item.state}, {item.postalCode}</p>
                    {showButton && (
                        <Button variant="outlined" fullWidth onClick={() => handleSelectAddress(item)}>Select</Button>
                    )}
                </div>
            </div>
        </Card>
    );
};
