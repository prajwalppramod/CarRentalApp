import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import BookCar from './components/BookCar'
import Login from './components/Login'
import Signup from './components/Signup'
import ErrorPage from './components/ErrorPage'
import ViewAllUsers from './components/ViewAllUsers'
import ViewAllBookings from './components/ViewAllBookings'
import LogoutPage from './components/LogoutPage'
import CancelBooking from './components/CancelBooking'
import AddCar2 from './components/AddCar2'
import CreateBooking from './components/CreateBooking'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/bookcar' element={<BookCar/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/error' element={<ErrorPage/>} />
            <Route path='/viewallusers' element={<ViewAllUsers/>} />
            <Route path='/viewallbookings' element={<ViewAllBookings/>} />
            <Route path='/logout' element={<LogoutPage/>} />
            <Route path='/cancelbooking' element={<CancelBooking/>} />
            <Route path='/addcar' element={<AddCar2/>} />
            <Route path='/createbooking' element={<CreateBooking/>} />
        </Routes>
        <Footer/>
      </div>

    </>
  )
}

export default App
