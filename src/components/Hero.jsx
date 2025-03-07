import React from 'react'
import CarRentalIcon from '@mui/icons-material/CarRental';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';
const Hero = () => {
    return (
        <div>
            <section class="text-gray-600  body-font w-full bg-[url(https://www.hertz.com/content/dam/hertz/global/blog-articles/resources/car-rental-tips.jpg)] bg-cover">
                <div class="container h-screen mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 class="title-font sm:text-4xl text-2xl mb-4 font-medium text-gray-900">Explore New Horizons with
                            <br class="hidden lg:inline-block"/>Our Affordable Car Rentals
                        </h1>
                        <p class="mb-8 leading-relaxed w-1/2">Discover the freedom of the open road with our reliable car rentals. Whether it’s a weekend getaway or a business trip, our easy-to-use app ensures you have the perfect ride every time.</p>
                        <div class="flex justify-center">
                            <button class="inline-flex text-white bg-[#08426a] border-0 py-2 px-6 focus:outline-none rounded text-lg"><Link to={"/bookcar"}><CarRentalIcon className='mr-0.5'/>Book Car</Link></button>
                            <button class="ml-4 inline-flex text-[#08426a] bg-gray-100 border-0 py-2 px-6 focus:outline-none rounded text-lg"><InfoIcon className='mt-0.5 pr-0.5 mr-0.5'/>Know more</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero