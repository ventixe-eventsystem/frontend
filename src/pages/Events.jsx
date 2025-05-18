import React, { useEffect, useState } from 'react'
import '../assets/css/events.css'
import EventCard from '../assets/components/EventCard'
import { getEvents } from '../assets/services/eventService'

const Events = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    getEvents().then(setEvents).catch(console.error)
  }, [])

  return (
    <div>
      <div className='events-options'>
        <input className='search-event' type='text' />
        <button>Active (?)</button>
        <button>Draft (?)</button>
        <button>Past (?)</button>
      </div>
      {events.map(e => <EventCard key={e.id} event={e} />)}

    </div>
  )
}

export default Events
