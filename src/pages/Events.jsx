import  { useEffect, useState } from 'react'
import '../assets/css/events.css'
import EventCard from '../assets/components/EventCard'
import AddEvent from '../assets/components/AdminAddEvent'
import { getEvents, removeEvent } from '../assets/services/eventService'
import RoleGuard from '../assets/components/RoleGuard'

const Events = () => {
  const [events, setEvents] = useState([])

  const fetchEvents = async () => {
    try {
      const result = await getEvents()
      setEvents(result)
    }
    catch (error){
      console.log(error)
    }
  }

  useEffect(() => {
    fetchEvents()
  }, [])
  
  const handleRemove = async (id) => {
    try {
      await removeEvent(id)
      fetchEvents()
    }
    catch (error) {
      console.log('Failed to remove event:', error)
    }
  }

  if (!events) return <div>Loading...</div>
  
  return (
    <div className='events'>
      <div className='events-options'>
        <RoleGuard roles={["Admin"]}>
          <AddEvent onAdd={fetchEvents} />
        </RoleGuard>
        <input className='search-event' type='text' />
        <button>Active (?)</button>
        <button>Draft (?)</button>
        <button>Past (?)</button>
      </div>
      {events.length > 0
        ? events.map(e => <EventCard key={e.id} event={e} onRemove={() => handleRemove(e.id)} />)
        : <p>No events found</p>}
    </div>
  )
}

export default Events
