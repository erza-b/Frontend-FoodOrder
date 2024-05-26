// RegisterForm.jsx
import React, { useState } from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography, IconButton, InputAdornment } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../State/Authentication/Action';
import { useDispatch } from 'react-redux';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import * as Yup from 'yup';

// Mock function to check if email already exists
const checkEmailExists = async (email) => {
    // Mock existing emails
    const existingEmails = ["test@example.com", "user@example.com"];
    return existingEmails.includes(email);
};

const initialValues = {
    fullName: '',
    email: "",
    password: "",
    role: "ROLE_CUSTOMER"
};

const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
    role: Yup.string().required('Role is required')
});

export default function RegisterForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);
    const [emailError, setEmailError] = useState('');

    const handleSubmit = async (values, { setSubmitting }) => {
        setSubmitting(true);
        setEmailError('');
        const emailExists = await checkEmailExists(values.email);
        if (emailExists) {
            setEmailError('Email already exists');
            setSubmitting(false);
        } else {
            dispatch(registerUser({ userData: values, navigate }));
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div>
            <Typography variant='h5' className='text-center'>
                Register
            </Typography>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ errors, touched, isSubmitting }) => (
                    <Form>
                        <Field
                            as={TextField}
                            name="fullName"
                            label="Full Name"
                            fullWidth
                            variant="outlined"
                            margin='normal'
                            error={touched.fullName && !!errors.fullName}
                            helperText={touched.fullName && errors.fullName}
                        />
                        <Field
                            as={TextField}
                            name="email"
                            label="Email"
                            fullWidth
                            variant="outlined"
                            margin='normal'
                            error={(touched.email && !!errors.email) || !!emailError}
                            helperText={(touched.email && errors.email) || emailError}
                        />
                        <Field
                            as={TextField}
                            name="password"
                            label="Password"
                            type={showPassword ? 'text' : 'password'}
                            fullWidth
                            variant="outlined"
                            margin='normal'
                            error={touched.password && !!errors.password}
                            helperText={touched.password && errors.password}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={togglePasswordVisibility}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <FormControl fullWidth margin='normal'>
                            <InputLabel id="role-simple-select-label">Role</InputLabel>
                            <Field
                                as={Select}
                                labelId="role-simple-select-label"
                                id="demo-simple-select"
                                name="role"
                                error={touched.role && !!errors.role}
                            >
                                <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
                                <MenuItem value={"ROLE_RESTAURANT_OWNER"}>Restaurant Owner</MenuItem>
                            </Field>
                            {touched.role && errors.role && <Typography color="error">{errors.role}</Typography>}
                        </FormControl>
                        <Button
                            sx={{ mt: 2, padding: '1rem' }}
                            fullWidth
                            type='submit'
                            variant='contained'
                            disabled={isSubmitting}
                        >
                            Register
                        </Button>
                    </Form>
                )}
            </Formik>
            <Typography variant='body2' align='center' sx={{ mt: 3 }}>
                Already have an account?
                <Button size='small' onClick={() => navigate("/account/login")}>Login</Button>
            </Typography>
        </div>
    );
}
