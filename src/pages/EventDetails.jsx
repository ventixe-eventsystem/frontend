import { useEffect, useState } from 'react'
import '../assets/css/eventdetails.css'
import Packages from '../assets/components/Packages'
import { NavLink, useParams } from 'react-router-dom'
import { getEvent } from '../assets/services/eventService'
import DateIcon from '/src/assets/icons/calendardot.svg?react'
import MapPinIcon from '/src/assets/icons/mappin.svg?react'
import btn from '../assets/css/buttons.module.css'


const Event = () => {
  const { eventId } = useParams()
  const [event, setEvent] = useState({})

  const fetchEvent = async () => {
    try {
      const result = await getEvent(eventId)
      setEvent(result)
    }
    catch (error) {
      console.error('Error fetching events:', error)
    }
  }
  useEffect(() => {
    fetchEvent()
  }, [eventId])

  return (
    <div className='inner-wrapper space'>
      <div className='event-info-container'>
        <div className="preview-event"></div>
        <div className="event-info-details">
          <h6 className='details-title'>{event.name}</h6>
          <div className="group-icon">
            <DateIcon className='details-icon' />
            <p className='details-date'>
              {new Date(event.dateAndTime).toLocaleDateString('sv-SE', { day: 'numeric', month: 'long', year: 'numeric' })} - {new Date(event.dateAndTime).toLocaleTimeString('sv-SE', { hour: '2-digit', minute: '2-digit' })}
            </p>
          </div>
          <div className="group-icon">
            <MapPinIcon className='details-icon' />
            <p className='details-location'>{event.location}</p>
          </div>

          <div className='details-line'></div>
          <div className='details-price'>
            <NavLink to={`/event/${encodeURIComponent(event.id)}?package=1`} className={btn.primary}>Book</NavLink>
            <div className="price-container">
              <p className='price-text'>Starts from</p>
              <h6 className='amount'>${event.amount}40</h6>
            </div>
          </div>

          <div className='details-line'></div>
          <div className='details-about'>
            <p className='details-about-title'>About Event</p>
            <p className='details-about-description'>
              {event.description}
            </p>
          </div>
        </div>
      </div>
      <Packages eventName={event} />
    </div>
  )
}

export default Event
