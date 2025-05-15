import React from 'react'
import '../assets/css/events.css'
import EventCard from '../assets/components/EventCard'

const Events = () => {
  return (
    <div>
      <div className='events-options'>
        <input className='search-event' type='text' />
        <button>Active (?)</button>
        <button>Draft (?)</button>
        <button>Past (?)</button>
      </div>
      <EventCard />      
      <EventCard />      
      <EventCard />      
    </div>
  )
}

export default Events
