import React, { useEffect, useState } from 'react'
import '../assets/css/events.css'
import EventCard from '../assets/components/EventCard'
import AddEvent from '../assets/components/AdminAddEvent'
import { getEvents, removeEvent } from '../assets/services/eventService'

const Events = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    getEvents().then(setEvents).catch(console.error)
  }, [])

  const handleRemove = async (id) => {
    try {
      await removeEvent(id)
      getEvents().then(setEvents).catch(console.error)
    }
    catch (error){
      console.log('Failed to remove event:', error)
    }
  }

  return (
    <div>
      <div className='events-options'>
        <AddEvent onAdd={newEvents => setEvents(newEvents)} />
        <input className='search-event' type='text' />
        <button>Active (?)</button>
        <button>Draft (?)</button>
        <button>Past (?)</button>
      </div>
      {events.length > 0
      ? events.map(e => <EventCard key={e.id} event={e} onRemove={() => handleRemove(e.id)}/>) 
      : <p>No events found</p>}

    </div>
  )
}

export default Events
