import { NavLink } from 'react-router-dom'
import '../css/eventcard.css'
import RoleGuard from './RoleGuard'
import { useEffect, useState } from 'react'
import { getAllBookings } from '../services/bookingService'
const EventCard = ({ event, onRemove }) => {
  const [bookings, setBookings] = useState([])

  const ticketsLeft = () => {
    const forEvent = bookings.filter(b => b.eventId === event.id)
    const totalTickets = forEvent.reduce((total, b) => total + b.numberOfTickets, 0)
    const remaining = Math.round((totalTickets / event.maxAttendees) * 100)
    return remaining
  }

  useEffect(() => {
    const fetchBookings = async () => {
      const res = await getAllBookings()
      setBookings(res)
    }
    fetchBookings()
  }, [])

  return (
    <>
      <div className='event-card' id={event.id}>
        <RoleGuard roles={['Admin']}>
          <button className="btn-remove" onClick={(e) => { e.stopPropagation(); onRemove(); }}>Remove Event</button>
        </RoleGuard>
        <NavLink to={`/event/details/${encodeURIComponent(event.id)}`}>
          <div className='event-preview'>
          </div>
          <div className='event-info'>
            <p className='event-date'>
              {new Date(event.dateAndTime).toLocaleDateString('sv-SE', { day: 'numeric', month: 'long', year: 'numeric' })} - {new Date(event.dateAndTime).toLocaleTimeString('sv-SE', { hour: '2-digit', minute: '2-digit' })}
            </p>
            <p className='event-title'>{event.name}</p>
            <p className='event-location'>{event.location}</p>
            <div className='event-price'>
              <div className="progress-container">
                <div className="progress-bar" style={{ width: `${ticketsLeft()}%` }}></div>
              </div>
              <p className='progress-text'>{ticketsLeft()}%</p>
              <p className='start-price'>$50</p>
            </div>
          </div>
        </NavLink>
      </div>
    </>
  )
}

export default EventCard
