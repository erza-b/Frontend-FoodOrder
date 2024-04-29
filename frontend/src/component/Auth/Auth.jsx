import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import {Box,Modal} from '@mui/material'
import { style } from '../Cart/Cart'
import RegisterForm from './RegisterForm'
import { Login } from '@mui/icons-material'
import LoginForm from './LoginForm'


export const Auth = () => {
    const location=useLocation();
    const navigate=useNavigate();
    const handleOnClose=()=>{
        navigate("/")
    }
  return (
    <>
    <Modal onClose={handleOnClose} open={
        location.pathname==="/account/register"
        || location.pathname==="/account/login"
    }>
    <Box sx={style}>
       {location.pathname==="/account/register"?<RegisterForm/>:<LoginForm/>}
    </Box>
    </Modal>
    </>
  )
}
