import React, { useState } from 'react';
import { Button, TextField, Typography, IconButton, InputAdornment, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser, resetPassword } from '../State/Authentication/Action';

const initialValues = {
    email: "",
    password: ""
};

function LoginForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [openForgotPassword, setOpenForgotPassword] = useState(false);
    const [forgotEmail, setForgotEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [invalidPassword, setInvalidPassword] = useState(false);

    const handleSubmit = (values) => {
        dispatch(loginUser({ userData: values, navigate }));
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const handleForgotPassword = () => {
        setOpenForgotPassword(true);
    };

    const handleForgotPasswordSubmit = () => {
        setOpenForgotPassword(false);
        setNewPassword('');
        setConfirmPassword('');
    };

    const handleNewPasswordSubmit = () => {
        if (newPassword === confirmPassword) {
            dispatch(resetPassword({ email: forgotEmail, newPassword }));
            setOpenForgotPassword(false);
        } else {
            setInvalidPassword(true);
        }
    };

    return (
        <div>
            <Typography variant='h5' className='text-center'>
                Login
            </Typography>
            <Formik onSubmit={handleSubmit} initialValues={initialValues}>
                <Form>
                    <Field
                        as={TextField}
                        name="email"
                        label="Email"
                        fullWidth
                        variant="outlined"
                        margin='normal'
                    />
                    <Field
                        as={TextField}
                        name="password"
                        label="Password"
                        type={showPassword ? 'text' : 'password'}
                        fullWidth
                        variant="outlined"
                        margin='normal'
                        error={invalidPassword}
                        helperText={invalidPassword && "Invalid password"}
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
                    <Button sx={{ mt: 2, padding: '1rem' }} fullWidth type='submit' variant='contained'>Login</Button>
                </Form>
            </Formik>
            <Typography variant='body2' align='center' sx={{ mt: 3 }}>
                Don't have an account?
                <Button size='small' onClick={() => navigate("/account/register")}>Register</Button>
            </Typography>
            <Typography variant='body2' align='center' sx={{ mt: 3 }}>
                Forgot your password?
                <Button size='small' onClick={handleForgotPassword}>Reset Password</Button>
            </Typography>
            <Dialog open={openForgotPassword} onClose={() => setOpenForgotPassword(false)}>
                <DialogTitle>Reset Password</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Email"
                        fullWidth
                        variant="outlined"
                        margin='normal'
                        value={forgotEmail}
                        onChange={(e) => setForgotEmail(e.target.value)}
                    />
                    <TextField
                        label="New Password"
                        fullWidth
                        variant="outlined"
                        margin='normal'
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <TextField
                        label="Confirm Password"
                        fullWidth
                        variant="outlined"
                        margin='normal'
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        error={invalidPassword}
                        helperText={invalidPassword && "Passwords do not match"}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenForgotPassword(false)}>Cancel</Button>
                    <Button onClick={handleNewPasswordSubmit} variant="contained">Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default LoginForm;
