import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Checkbox, FormControlLabel, Card, CardContent, Typography } from '@mui/material';
import axios from 'axios';  // Import Axios

const AddCar2 = ({ onAddCar }) => {
    const [car, setCar] = useState({
        car_name: '',
        fuel_type: '',
        num_seats: '',
        price_per_day: '',
        car_image: '',
        availability: true,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCar({
            ...car,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // POST request to add the car (replace 'your-api-url' with the actual API URL)
        try {
            const response = await axios.post('https://localhost:8080/addCar', car);
            // Handle successful response (e.g., call onAddCar if passed as prop)
            if (response.status === 201) {
                onAddCar(car); // This calls the function passed via props to add the car to the state
                setCar({
                    car_name: '',
                    fuel_type: '',
                    num_seats: '',
                    price_per_day: '',
                    car_image: '',
                    availability: true,
                });
                alert('Car added successfully');
            }
        } catch (error) {
            console.error('Error adding car:', error);
            alert('Failed to add car');
        }
    };

    return (
        <div className='flex flex-row justify-center items-center'>
            <form onSubmit={handleSubmit} style={{ maxWidth: 600, width: '100%' }}>
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="h2" gutterBottom>
                            Add Car
                        </Typography>

                        {/* Car Name Field */}
                        <TextField
                            label="Car Name"
                            variant="outlined"
                            fullWidth
                            name="car_name"
                            value={car.car_name}
                            onChange={handleChange}
                            required
                            style={{ marginBottom: '16px' }} // Adds space between fields
                        />

                        {/* Fuel Type Field */}
                        <FormControl fullWidth style={{ marginBottom: '16px' }}>
                            <InputLabel>Fuel Type</InputLabel>
                            <Select
                                name="fuel_type"
                                value={car.fuel_type}
                                onChange={handleChange}
                                required
                            >
                                <MenuItem value="Petrol">Petrol</MenuItem>
                                <MenuItem value="Diesel">Diesel</MenuItem>
                                <MenuItem value="Electric">Electric</MenuItem>
                            </Select>
                        </FormControl>

                        {/* Number of Seats Field */}
                        <FormControl fullWidth style={{ marginBottom: '16px' }}>
                            <InputLabel>Number of Seats</InputLabel>
                            <Select
                                name="num_seats"
                                value={car.num_seats}
                                onChange={handleChange}
                                required
                            >
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                            </Select>
                        </FormControl>




                        {/* Price per Day Field */}
                        <TextField
                            label="Price per Day"
                            variant="outlined"
                            type="number"
                            fullWidth
                            name="price_per_day"
                            value={car.price_per_day}
                            onChange={handleChange}
                            required
                            style={{ marginBottom: '16px' }}
                        />

                        {/* Car Image URL Field */}
                        <TextField
                            label="Car Image URL"
                            variant="outlined"
                            fullWidth
                            name="car_image"
                            value={car.car_image}
                            onChange={handleChange}
                            required
                            style={{ marginBottom: '16px' }}
                        />

                        {/* Availability Checkbox */}
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={car.availability}
                                    onChange={(e) => setCar({ ...car, availability: e.target.checked })}
                                    name="availability"
                                    color="primary"
                                />
                            }
                            label="Available"
                            style={{ marginBottom: '16px' }} // Adds space between checkbox and button
                        />

                        {/* Submit Button */}
                        <Button variant="contained" color="primary" type="submit" fullWidth>
                            Add Car
                        </Button>
                    </CardContent>
                </Card>
            </form>
        </div>
    );
};

export default AddCar2;
