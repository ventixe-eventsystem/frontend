import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import './assets/css/App.css'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Bookings from './pages/Bookings.jsx'
import AuthLayout from './layouts/authLayout'
import PortalLayout from './layouts/portalLayout'
import Events from './pages/Events.jsx'
import EventDetails from './pages/EventDetails.jsx'
import EventBooking from './pages/EventBooking.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path='/' element={<Navigate to='/login' replace />} />
          <Route path='/login' element={<Login />} />
        </Route>

        <Route element={<PortalLayout />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/bookings' element={<Bookings />} />
          <Route path='/events' element={<Events />} />
          <Route path='/events/:eventId' element={<EventDetails />} />
          <Route path='/event/:eventId' element={<EventBooking />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
