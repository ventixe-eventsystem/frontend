import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import './assets/css/App.css'
import SignIn from './pages/SignIn.jsx'
import SignUp from './pages/SignUp.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Bookings from './pages/Bookings.jsx'
import AuthLayout from './layouts/authLayout'
import PortalLayout from './layouts/portalLayout'
import Events from './pages/Events.jsx'
import EventDetails from './pages/EventDetails.jsx'
import EventBooking from './pages/EventBooking.jsx'
import ProtectedRoute from './assets/components/ProtectedRoute.jsx'
import VerifyEmail from './pages/VerifyEmail.jsx'
import Unauthorized from './pages/Unauthorized.jsx'
import RoleBasedRedirect from './assets/components/RoleBaseRedirect.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/verify-email' element={<VerifyEmail />} />

        <Route element={<AuthLayout />}>
          {/* <Route path='/' element={<Navigate to='/login' replace />} /> */}
          <Route path='/' element={<RoleBasedRedirect />} />
          <Route path='/login' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
        </Route>

        <Route element={
          <ProtectedRoute requiredRoles={['Admin', 'User']}> <PortalLayout />
          </ProtectedRoute>}>
          <Route path='/dashboard' element={
            <ProtectedRoute requiredRoles={['Admin']}>
              <Dashboard />
            </ProtectedRoute>} />
          <Route path='/bookings' element={<Bookings />} />
          <Route path='/events' element={<Events />} />
          <Route path='/events/:eventId' element={<EventDetails />} />
          <Route path='/event/:eventId' element={<EventBooking />} />
          <Route path='/unauthorized' element={<Unauthorized />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
