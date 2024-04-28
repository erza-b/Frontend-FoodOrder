import React from 'react'
import { CartItem } from './CartItem'
import { Divider } from '@mui/material'

const items=[1,1,1,1]
const   Cart = () => {
    return (
        <div>
            <main className='lg:flex justify-between'>

                <section className='lg:w-[30%] space-y-6 lg:min-h-screen pt-10'>
                    {items.map(() => <CartItem />)}
            
                <div className='billDetails lg:w-[90%] pl-[10%]'>
                    <p className="font-extralight py-5">Bill Details</p>
                    <div className='space-y-3'>
                        <div className='flex justify-between text-gray-400'>
                            <p>Item Total</p>
                            <p>4.99€</p>
                        </div>
                        <div className='flex justify-between text-gray-400'>
                            <p>Deliver Fee</p>
                            <p>3.00€</p>
                        </div>
                        <div className='flex justify-between text-gray-400'>
                            <p>GST and Restaurant Charges</p>
                            <p>6.00€</p>
                        </div>
                        <Divider />
                    </div>
                    <div className='flex justify-between text-gray-400'>
                        <p>Total pay</p>
                        <p>14.00€</p>
                    </div>
                </div>
                </section>
                <Divider orientation='vertical' flexItem/>
                <section className='lg:w-[70%] flex justify-center px-5 pb-10 lg: pv-0'>
                    <div>
                        <h1 className='text-center font-semibold text-2x1 py-10'>Choose Delivery Address</h1>
                        <div className='flex gap-5 flex-wrap justify-center'>

                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Cart;
