import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import SignUp from './pages/Signup/Signup.jsx'
import SignIn from './pages/SignIn/Signin.jsx'
import Cars from './pages/Cars/Cars.jsx'
import CarDetail from './pages/CarDetail/CarDetail.jsx'
import BookingConfirmation from './pages/BookingConfirmation/BookingConfirmation.jsx'
import CarListing from './pages/CarListing/CarListing.jsx'
import Bookings from './pages/Bookings/Bookings.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/cars" element={<Cars />} />
      <Route path="/car-detail" element={<CarDetail />} />
      <Route path="/booking" element={<BookingConfirmation />} />
      <Route path="/car-list" element={<CarListing/>} />
      <Route path="/book-car/:id" element={<CarDetail/>} />
      <Route path="booking/:id" element={<BookingConfirmation />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
      
    </BrowserRouter>
  </StrictMode>,
)
