import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <header class="text-gray-600 body-font">
                <div class="container mx-auto flex flex-wrap justify-between p-5 flex-col md:flex-row items-center">
                    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <Link to="/"> <img src="src\assets\logo.jpg" alt="logo" className='w-15' /></Link>
                        <Link to="/">  <span class="ml-1 text-xl font-semibold">Car Rental</span></Link>


                    </a>
                    {/* <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-[#08426a] text-base justify-center">
                        <a class="mr-5 hover:text-gray-900">Available Cars</a>
                        <a class="mr-5 hover:text-gray-900">Second Link</a>
                        <a class="mr-5 hover:text-gray-900">Third Link</a>
                        <a class="mr-5 hover:text-gray-900">Fourth Link</a>
                    </nav> */}
                    <button class="inline-flex text-white items-center bg-[#08426a] border-0 py-1 px-3 focus:outline-none hover:bg-[#08426a] rounded text-base mt-4 md:mt-0"><Link to={"/bookcar"}><p className='pr-2 pl-2'>Book Car</p></Link>
                    </button>
                </div>
            </header>
        </div>
    )
}

export default Navbar