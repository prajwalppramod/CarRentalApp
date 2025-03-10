import { Button, TextField, InputAdornment, Typography, Paper, Box, useMediaQuery } from '@mui/material';
import { Email, Lock } from '@mui/icons-material';
import React, { useState } from 'react';

const Login = () => {
    const [data, setData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    const isMobile = useMediaQuery("(max-width:600px)");

    const inputHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const validateField = (name, value) => {
        let error = "";

        if (name === "email") {
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                error = "Enter a valid email";
            }
        } else if (name === "password") {
            const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            if (!passwordPattern.test(value)) {
                error = "Password must be at least 8 characters, include a letter, number & special character.";
            }
        }

        setErrors((prev) => ({ ...prev, [name]: error }));
    };

    const handleSubmit = () => {
        ["email", "password"].forEach(field => validateField(field, data[field]));

        if (Object.values(errors).every(error => error === "")) {
            console.log("Login Successful:", data);
            alert("Login successful!");
        } else {
            alert("Please correct the errors before submitting.");
        }
    };

    return (
        <Box sx={{ 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center",  
            height: "100vh", 
            width: "100vw",
            backgroundImage: "url('https://www.barsnet.com/wp-content/uploads/2020/03/Nows-The-Time-For-The-Car-Rental-Industry-To-Prep-For-Recovery.jpg')", 
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            padding: isMobile ? 2 : 0
        }}>
            <Paper sx={{ 
                padding: 4, 
                borderRadius: 3, 
                width: isMobile ? "90%" : 400, 
                textAlign: "center", 
                backgroundColor: "#e3f2fd",
                boxShadow: 3
            }}>
                <Typography variant="h5" sx={{ color: '#333', fontWeight: "bold", marginBottom: 3 }}>
                    LOGIN PAGE
                </Typography>

                <TextField 
                    label="Email" 
                    variant="outlined" 
                    onChange={inputHandler} 
                    onBlur={(e) => validateField("email", e.target.value)} 
                    name="email" 
                    fullWidth 
                    margin="normal" 
                    error={!!errors.email} 
                    helperText={errors.email} 
                    InputProps={{ startAdornment: (<InputAdornment position="start"><Email /></InputAdornment>) }} 
                />

                <TextField 
                    label="Password" 
                    variant="outlined" 
                    onChange={inputHandler} 
                    onBlur={(e) => validateField("password", e.target.value)} 
                    name="password" 
                    type="password" 
                    fullWidth 
                    margin="normal" 
                    error={!!errors.password} 
                    helperText={errors.password} 
                    InputProps={{ startAdornment: (<InputAdornment position="start"><Lock /></InputAdornment>) }} 
                />

                <Button 
                    variant="contained" 
                    color="primary" 
                    fullWidth 
                    sx={{ marginTop: 3, padding: 1.5, fontWeight: "bold", backgroundColor: "#007BFF", "&:hover": { backgroundColor: "#0056b3" } }} 
                    onClick={handleSubmit}>
                    Login
                </Button>
            </Paper>
        </Box>
    );
};

export default Login;
