import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import BookCar from './components/BookCar'

function App() {

  return (
    <>
      <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/bookcar' element={<BookCar/>} />
        </Routes>
      </div>

    </>
  )
}

export default App
