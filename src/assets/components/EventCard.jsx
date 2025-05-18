import React from 'react'
import '../css/eventcard.css'

const EventCard = ({event}) => {
  return (
    <>
      <div className="event-card">
        <div className="event-preview">
        </div>
        <div className="event-info">
          <p>{event.time}</p>
          <p>{event.name}</p>
          <p>{event.location}</p>
          <p>$40</p>
        </div>
      </div>
    </>
  )
}

export default EventCard
