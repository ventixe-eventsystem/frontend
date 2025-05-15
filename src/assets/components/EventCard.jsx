import React from 'react'
import '../css/eventcard.css'

const EventCard = () => {
  return (
    <>
      <div className="event-card">
        <div className="event-preview">
        </div>
        <div className="event-info">
          <p>June 5, 2029 - 3:00 PM</p>
          <p>Adveture Gear Show</p>
          <p>Rocky Ridge Exhibition Hall, Denver, CO</p>
          <p>$40</p>
        </div>
      </div>
    </>
  )
}

export default EventCard
