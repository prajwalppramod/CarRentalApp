import { Button, TextField, InputAdornment, Typography, Paper, Box, useMediaQuery } from '@mui/material';
import { AccountCircle, Lock, Email } from '@mui/icons-material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [data, setData] = useState({
        fullname: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({});
    const isMobile = useMediaQuery("(max-width:600px)");
    const navigate = useNavigate();

    const inputHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const validateField = (name, value) => {
        let error = "";

        if (name === "fullname") {
            const namePattern = /^[A-Za-z\s]*[A-Za-z][A-Za-z\s]*$/;
            if (!value) {
                error = "Full Name is required";
            } else if (!namePattern.test(value)) {
                error = "Only alphabets and spaces allowed";
            }
        } else if (name === "email") {
            if (!value) {
                error = "Email is required";
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                error = "Enter a valid email";
            }
        } else if (name === "password") {
            if (!value) {
                error = "Password is required";
            } else if (value.length < 8) {
                error = "At least 8 characters required";
            } else if (!/[A-Z]/.test(value)) {
                error = "Include at least one uppercase letter";
            } else if (!/[0-9]/.test(value)) {
                error = "Include at least one number";
            } else if (!/[!@#$%^&*]/.test(value)) {
                error = "Include at least one special character";
            } else if (/\s/.test(value)) {
                error = "No spaces allowed in password";
            }
        } else if (name === "confirmPassword") {
            if (!value) {
                error = "Confirm Password is required";
            } else if (value !== data.password) {
                error = "Passwords do not match";
            }
        }

        setErrors((prev) => ({ ...prev, [name]: error }));
    };

    const validateAllFields = () => {
        const newErrors = {};
        Object.keys(data).forEach((field) => {
            validateField(field, data[field]);
            if (!data[field]) {
                newErrors[field] = "This field is required";
            }
        });
        setErrors(newErrors);
        return Object.values(newErrors).every((error) => error === "");
    };

    const handleSubmit = () => {
        const newErrors = {};
        
        // Validate all fields before submission
        Object.keys(data).forEach((field) => {
            validateField(field, data[field]);
            if (!data[field]) {
                newErrors[field] = "This field is required";
            }
        });
    
        setErrors(newErrors);
    
        if (Object.values(newErrors).some(error => error !== "")) {
            alert("Please correct the errors before submitting.");
            return; // Stop submission if there are errors
        }
    
        console.log("Form Data Submitted:", data);
        alert("Signup successful!");
        navigate("/signin");
    };
    

    return (
        <Box sx={{ 
            display: "flex", 
            justifyContent: isMobile ? "center" : "flex-start", 
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
                marginLeft: isMobile ? 0 : "5%", 
                boxShadow: 3
            }}>
                <Typography variant="h5" sx={{ color: '#333', fontWeight: "bold", marginBottom: 3 }}>
                    SIGN UP
                </Typography>

                <TextField 
                    label="Full Name" 
                    variant="outlined" 
                    onChange={inputHandler} 
                    onBlur={(e) => validateField("fullname", e.target.value)} 
                    name="fullname" 
                    fullWidth 
                    margin="normal" 
                    error={!!errors.fullname} 
                    helperText={errors.fullname} 
                    InputProps={{ startAdornment: (<InputAdornment position="start"><AccountCircle /></InputAdornment>) }} 
                />

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

                <TextField 
                    label="Confirm Password" 
                    variant="outlined" 
                    onChange={inputHandler} 
                    onBlur={(e) => validateField("confirmPassword", e.target.value)} 
                    name="confirmPassword" 
                    type="password" 
                    fullWidth 
                    margin="normal" 
                    error={!!errors.confirmPassword} 
                    helperText={errors.confirmPassword} 
                    InputProps={{ startAdornment: (<InputAdornment position="start"><Lock /></InputAdornment>) }} 
                />

                <Button 
                    variant="contained" 
                    color="primary" 
                    fullWidth 
                    sx={{ marginTop: 3, padding: 1.5, fontWeight: "bold", backgroundColor: "#007BFF", "&:hover": { backgroundColor: "#0056b3" } }} 
                    onClick={handleSubmit}>
                    Submit
                </Button>
            </Paper>
        </Box>
    );
};

export default Signup;


// import { Button, TextField, InputAdornment, Typography, Paper, Box, useMediaQuery } from '@mui/material';
// import { AccountCircle, Lock, Email, PhotoCamera, Description } from '@mui/icons-material';
// import React, { useState } from 'react';

// const Signup = () => {
//     const [data, setData] = useState({
//         fullname: '',
//         email: '',
//         password: '',
//         profilePic: null,
//         drivingLicense: null
//     });

//     const [errors, setErrors] = useState({});
//     const isMobile = useMediaQuery("(max-width:600px)"); // Check if screen width is below 600px

//     const inputHandler = (e) => {
//         setData({ ...data, [e.target.name]: e.target.value });
//     };

//     const validateField = (name, value) => {
//         let error = "";
        
//         if (name === "fullname") {
//             const namePattern = /^[A-Za-z\s]+$/;
//             if (!value) {
//                 error = "Full Name is required";
//             } else if (!namePattern.test(value)) {
//                 error = "Only alphabets and spaces are allowed";
//             }
//         } else if (name === "email") {
//             if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
//                 error = "Enter a valid email";
//             }
//         } else if (name === "password") {
//             if (value.length < 6) {
//                 error = "Password must be at least 6 characters";
//             }
//         }

//         setErrors((prev) => ({ ...prev, [name]: error }));
//     };

//     const fileHandler = (e) => {
//         const file = e.target.files[0];

//         if (file) {
//             const isProfilePic = e.target.name === "profilePic";
//             const validTypes = isProfilePic ? ["image/png", "image/jpeg", "image/jpg"] : ["application/pdf"];

//             if (!validTypes.includes(file.type)) {
//                 alert(`Invalid file type. Please upload a ${isProfilePic ? "PNG/JPG image" : "PDF file"}.`);
//                 return;
//             }

//             if (file.size > 2 * 1024 * 1024) {
//                 alert("File size should be less than 2MB.");
//                 return;
//             }

//             setData({ ...data, [e.target.name]: file });
//         }
//     };

//     const handleSubmit = () => {
//         const requiredFields = ["fullname", "email", "password"];
//         requiredFields.forEach(field => validateField(field, data[field]));

//         if (Object.values(errors).every(error => error === "")) {
//             console.log("Form Data Submitted:", data);
//             alert("Login successful!");
//         } else {
//             alert("Please correct the errors before submitting.");
//         }
//     };

//     return (
//         <Box sx={{ 
//             display: "flex", 
//             justifyContent: isMobile ? "center" : "flex-start", 
//             alignItems: "center",  
//             height: "100vh", 
//             width: "100vw",
//             backgroundImage: "url('https://www.barsnet.com/wp-content/uploads/2020/03/Nows-The-Time-For-The-Car-Rental-Industry-To-Prep-For-Recovery.jpg')", 
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundRepeat: "no-repeat",
//             padding: isMobile ? 2 : 0
//         }}>
//             <Paper sx={{ 
//                 padding: 4, 
//                 borderRadius: 3, 
//                 width: isMobile ? "90%" : 400, 
//                 textAlign: "center", 
//                 backgroundColor: "#e3f2fd",
//                 marginLeft: isMobile ? 0 : "5%", 
//                 boxShadow: 3
//             }}>
//                 <Typography variant="h5" sx={{ color: '#333', fontWeight: "bold", marginBottom: 3 }}>
//                     SIGN UP
//                 </Typography>

//                 <TextField 
//                     label="Full Name" 
//                     variant="outlined" 
//                     onChange={inputHandler} 
//                     onBlur={(e) => validateField("fullname", e.target.value)} 
//                     name="fullname" 
//                     fullWidth 
//                     margin="normal" 
//                     error={!!errors.fullname} 
//                     helperText={errors.fullname} 
//                     InputProps={{ startAdornment: (<InputAdornment position="start"><AccountCircle /></InputAdornment>) }} 
//                 />

//                 <TextField 
//                     label="Email" 
//                     variant="outlined" 
//                     onChange={inputHandler} 
//                     onBlur={(e) => validateField("email", e.target.value)} 
//                     name="email" 
//                     fullWidth 
//                     margin="normal" 
//                     error={!!errors.email} 
//                     helperText={errors.email} 
//                     InputProps={{ startAdornment: (<InputAdornment position="start"><Email /></InputAdornment>) }} 
//                 />

//                 <TextField 
//                     label="Password" 
//                     variant="outlined" 
//                     onChange={inputHandler} 
//                     onBlur={(e) => validateField("password", e.target.value)} 
//                     name="password" 
//                     type="password" 
//                     fullWidth 
//                     margin="normal" 
//                     error={!!errors.password} 
//                     helperText={errors.password} 
//                     InputProps={{ startAdornment: (<InputAdornment position="start"><Lock /></InputAdornment>) }} 
//                 />

//                 <Button 
//                     variant="outlined" 
//                     component="label" 
//                     fullWidth 
//                     sx={{ marginTop: 2, padding: 1, border: "2px dashed #777", color: "#555", fontWeight: "bold", "&:hover": { backgroundColor: "#ddd" } }}>
//                     Upload Profile Picture (JPG/PNG)
//                     <input type="file" hidden name="profilePic" accept="image/png, image/jpeg" onChange={fileHandler} />
//                     <PhotoCamera sx={{ marginLeft: 1 }} />
//                 </Button>

//                 <Button 
//                     variant="outlined" 
//                     component="label" 
//                     fullWidth 
//                     sx={{ marginTop: 2, padding: 1, border: "2px dashed #777", color: "#555", fontWeight: "bold", "&:hover": { backgroundColor: "#ddd" } }}>
//                     Upload Driving License (PDF)
//                     <input type="file" hidden name="drivingLicense" accept="application/pdf" onChange={fileHandler} />
//                     <Description sx={{ marginLeft: 1 }} />
//                 </Button>

//                 <Button 
//                     variant="contained" 
//                     color="primary" 
//                     fullWidth 
//                     sx={{ marginTop: 3, padding: 1.5, fontWeight: "bold", backgroundColor: "#007BFF", "&:hover": { backgroundColor: "#0056b3" } }} 
//                     onClick={handleSubmit}>
//                     Submit
//                 </Button>
//             </Paper>
//         </Box>
//     );
// };

// export default Signup;
