import React, { useEffect, useState } from 'react'
import '../assets/css/eventdetails.css'
import Packages from '../assets/components/Packages'
import { NavLink, useParams } from 'react-router-dom'
import { getEvent } from '../assets/services/eventService'

const Event = () => {
  const { eventId } = useParams()
  const [event, setEvent] = useState({})

  const fetchEvent = async () => {
    try {
      const result = await getEvent(eventId)
      setEvent(result)
    }
    catch (error) {
      console.error('Error fetching evnets:', error)
    }
  }

  useEffect(() => {
    fetchEvent()
  }, [eventId])

  return (
    <div className='inner-wrapper space'>
      <div>
        <div className="preview-event"></div>
        <div className="event-info-details">
          <p>
            {new Date(event.dateAndTime).toLocaleDateString('sv-SE', { day: 'numeric', month: 'long', year: 'numeric' })} - {new Date(event.dateAndTime).toLocaleTimeString('sv-SE', { hour: '2-digit', minute: '2-digit' })}
          </p>
          <h6 className='details-title'>{event.name}</h6>
          <p className='details-location'>{event.location}</p>
          <div>
            <NavLink to={`/event/${encodeURIComponent(event.id)}`}>Book</NavLink>
          </div>
          <div className='details-line'></div>
          <p>$40</p>
          <div className='details-line'></div>
          <p>{event.description}</p>
        </div>
      </div>
      <Packages />
    </div>
  )
}

export default Event
