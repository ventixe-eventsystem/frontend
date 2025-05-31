import { NavLink } from 'react-router-dom'
import '../css/eventcard.css'
import RoleGuard from './RoleGuard'

const EventCard = ({ event, onRemove }) => {
  return (
    <>
      <div className='event-card' id={event.id}>
        <div className='event-preview'>
          <RoleGuard roles={['Admin']}>
            <button className="btn-remove" onClick={onRemove}>Remove Event</button>
          </RoleGuard>
        </div>
        <div className='event-info'>
          <p className='event-date'>
            {new Date(event.dateAndTime).toLocaleDateString('sv-SE', { day: 'numeric', month: 'long', year: 'numeric' })} - {new Date(event.dateAndTime).toLocaleTimeString('sv-SE', { hour: '2-digit', minute: '2-digit' })}
          </p>
          <p className='event-title'>{event.name}</p>
          <p className='event-location'>{event.location}</p>
          <div className='event-price'>
            <NavLink to={`/events/${encodeURIComponent(event.id)}`}>Tryck här</NavLink>
            <p>$40</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default EventCard
