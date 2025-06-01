import '../assets/css/dashboard.css'
import Calander from '/src/assets/icons/calendardot.svg?react'
import CheckSquare from '/src/assets/icons/checksquare.svg?react'
import Events from '/src/assets/icons/events.svg?react'
import { getEvents } from '../assets/services/eventService'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllBookings } from '../assets/services/bookingService'

const Dashboard = () => {
  const [events, setEvents] = useState([])
  const [bookings, setBookings] = useState([])

  useEffect(() => {
    getEvents().then(setEvents).catch(console.error)
    getAllBookings().then(setBookings).catch(console.error);
  }, [])

  return (
    <div className='dashboard'>
      <Link to={'/events'}>
        <div className='upcoming-container'>
          <div className='calander-container'>
            <Calander className='calander' />
          </div>
          <div className='upcoming'>
            <p className='upcoming-title'>Upcoming Events</p>
            <h6 className='upcoming-qty'>{events.length}</h6>
          </div>
        </div>
      </Link>
      <Link to={'/bookings'}>
        <div className='upcoming-container'>
          <div className='calander-container'>
            <CheckSquare className='calander' />
          </div>
          <div className='upcoming'>
            <p className='upcoming-title'>Total Bookings</p>
            <h6 className='upcoming-qty'>{bookings.length}</h6>
          </div>
        </div>
      </Link>
      <Link to={'/bookings'}>
        <div className='upcoming-container'>
          <div className='calander-container'>
            <Events className='calander' />
          </div>
          <div className='upcoming'>
            <p className='upcoming-title'>Tickets Sold</p>
            <h6 className='upcoming-qty'>{bookings.reduce((total, b) => total + b.numberOfTickets, 0)}</h6>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Dashboard
