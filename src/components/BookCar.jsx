import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import { Link } from 'react-router-dom';

const cars = [
    {
      car_name: 'Skoda Rapid',
      fuel_type: 'Petrol',
      num_seats: 5,
      price_per_day: 3000,
      car_image: 'https://imgd.aeplcdn.com/370x208/cw/ec/23512/Skoda-Rapid-Right-Front-Three-Quarter-83269.jpg?v=201711021421&q=80',
    },
    {
      car_name: 'XUV 700',
      fuel_type: 'Petrol',
      num_seats: 7,
      price_per_day: 4000,
      car_image: 'https://imgd.aeplcdn.com/1920x1080/n/cw/ec/42355/xuv700-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80&q=80',
    },
    {
      car_name: 'Hyundai Creta',
      fuel_type: 'Diesel',
      num_seats: 5,
      price_per_day: 3500,
      car_image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/106815/creta-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80',
    },
    {
      car_name: 'Toyota Innova',
      fuel_type: 'Diesel',
      num_seats: 7,
      price_per_day: 4500,
      car_image: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/115025/innova-hycross-exterior-right-front-three-quarter-73.jpeg?isig=0&q=80',
    },
    {
      car_name: 'Maruti Swift',
      fuel_type: 'Petrol',
      num_seats: 5,
      price_per_day: 2500,
      car_image: 'https://imgd.aeplcdn.com/310x174/n/cw/ec/54399/swift-exterior-right-front-three-quarter-64.jpeg?isig=0&q=80',
    },
    {
      car_name: 'Honda City',
      fuel_type: 'Petrol',
      num_seats: 5,
      price_per_day: 3200,
      car_image: 'https://imgd.aeplcdn.com/1920x1080/n/cw/ec/134287/city-exterior-right-front-three-quarter-77.jpeg?isig=0&q=80&q=80',
    },
    {
      car_name: 'Tata Nexon',
      fuel_type: 'Electric',
      num_seats: 5,
      price_per_day: 3800,
      car_image: 'https://cdni.autocarindia.com/Utils/ImageResizerV2.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Tata-Nexon-130120251211.jpg&w=872&h=578&q=75&c=1',
    },
    {
      car_name: 'Ford Endeavour',
      fuel_type: 'Diesel',
      num_seats: 7,
      price_per_day: 5000,
      car_image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/37640/endeavour-exterior-right-front-three-quarter-149473.jpeg?q=80',
    },
    {
      car_name: 'Volkswagen Polo',
      fuel_type: 'Petrol',
      num_seats: 5,
      price_per_day: 2800,
      car_image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/29628/polo-exterior-right-front-three-quarter-2.jpeg?q=80',
    },
    {
      car_name: 'Kia Seltos',
      fuel_type: 'Diesel',
      num_seats: 5,
      price_per_day: 3700,
      car_image: 'https://imgd.aeplcdn.com/642x336/n/cw/ec/174323/seltos-exterior-right-front-three-quarter.jpeg?isig=0&q=80',
    },
    {
      car_name: 'Mahindra Thar',
      fuel_type: 'Diesel',
      num_seats: 4,
      price_per_day: 4200,
      car_image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/40087/thar-exterior-right-front-three-quarter-35.jpeg?isig=0&q=80',
    },
    {
      car_name: 'Mercedes-Benz C-Class',
      fuel_type: 'Petrol',
      num_seats: 5,
      price_per_day: 8000,
      car_image: 'https://imgd.aeplcdn.com/1920x1080/n/cw/ec/178535/c-class-exterior-right-front-three-quarter.jpeg?isig=0&q=80&q=80',
    },
    {
      car_name: 'BMW X5',
      fuel_type: 'Diesel',
      num_seats: 7,
      price_per_day: 10000,
      car_image: 'https://imgd.aeplcdn.com/1920x1080/n/cw/ec/152681/x5-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80&q=80',
    },
    {
      car_name: 'Audi Q7',
      fuel_type: 'Petrol',
      num_seats: 7,
      price_per_day: 11000,
      car_image: 'https://imgd.aeplcdn.com/642x336/n/cw/ec/192279/q7-exterior-right-front-three-quarter.jpeg?isig=0&q=80',
    },
    {
      car_name: 'Jaguar F-Pace',
      fuel_type: 'Diesel',
      num_seats: 5,
      price_per_day: 12000,
      car_image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/56265/f-pace-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80',
    },
    {
      car_name: 'Range Rover Evoque',
      fuel_type: 'Diesel',
      num_seats: 5,
      price_per_day: 13000,
      car_image: 'https://media.cdn-jaguarlandrover.com/api/v2/images/102860/w/640.jpg',
    },
    {
      car_name: 'Tesla Model 3',
      fuel_type: 'Electric',
      num_seats: 5,
      price_per_day: 9000,
      car_image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/37138/model-3-exterior-right-front-three-quarter.jpeg?isig=0&q=80',
    },
    {
      car_name: 'Hyundai Kona Electric',
      fuel_type: 'Electric',
      num_seats: 5,
      price_per_day: 7000,
      car_image: 'https://imgd.aeplcdn.com/1920x1080/n/cw/ec/29580/kona-electric-exterior-right-front-three-quarter-162254.jpeg?isig=0&wm=1&q=80&q=80',
    },
    {
      car_name: 'Nissan Magnite',
      fuel_type: 'Petrol',
      num_seats: 5,
      price_per_day: 2700,
      car_image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/173325/magnite-facelift-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80',
    }
  ];

  const BookCar = () => {
    return (
        <div className="container mx-auto px-5 py-10">
            <h2 className="text-3xl font-bold text-center mb-6">Available Cars for Rent</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cars.map((car, index) => (
                    <Card key={index} className="shadow-lg rounded-lg overflow-hidden flex flex-col">
                        <div className="h-48 w-full flex justify-center items-center bg-gray-100">
                            <CardMedia component="img" className="h-full w-auto object-contain" image={car.car_image} alt={car.car_name} />
                        </div>
                        <CardContent className="flex flex-col flex-grow">
                            <Typography variant="h6" className="font-semibold">{car.car_name}</Typography>
                            <Typography className="flex items-center mt-2 text-gray-600">
                                <LocalGasStationIcon className="mr-1 text-gray-500" /> {car.fuel_type}
                            </Typography>
                            <Typography className="flex items-center mt-2 text-gray-600">
                                <AirlineSeatReclineNormalIcon className="mr-1 text-gray-500" /> {car.num_seats} Seats
                            </Typography>
                            <Typography className="flex items-center mt-2 text-gray-600 font-semibold">
                                <DirectionsCarIcon className="mr-1 text-blue-600" /> ₹{car.price_per_day} / Day
                            </Typography>
                            <div className="mt-auto pt-4">
                                <Link to={"/login"}><button className='"inline-flex h-10 w-full text-white items-center bg-[#08426a] border-0 py-1 px-3 focus:outline-none hover:bg-[#08426a] rounded text-base mt-4 md:mt-0'>Rent Now</button></Link>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default BookCar;