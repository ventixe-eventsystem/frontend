import { useState } from 'react'
import { createEvent } from '../services/eventService'
import '../css/adminAddEvent.css'
import btn from '../css/buttons.module.css'

const AdminAddEvent = ({ onAdd }) => {
  const today = new Date().toISOString().split('T')[0]
  const todayTime = new Date().toTimeString().slice(0, 5)
  const [showAdd, setShowAdd] = useState(false)
  const [event, setEvent] = useState({ name: "", location: "", description: "", dateandtime: today, time: todayTime, maxAttendees: 150 })

  const handleChange = (e) => {
    const { name, value } = e.target
    setEvent(prev => ({
      ...prev, [name]: value
    }))
  }

  const handleClick = () => {
    setShowAdd(prev => !prev)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const fullDateTime = `${event.dateandtime}T${event.time}`

    const newEvent = {
      ...event,
      dateandtime: fullDateTime
    }
    delete newEvent.time

    try {
      await createEvent(newEvent)
      onAdd()
      setEvent({ name: '', location: "", description: "", dateandtime: today, time: todayTime })
    }
    catch (error) {
      console.log('Error creating event: ', error)
    }
  }

  return (
    <div>
      <h6 className='addevent-header' onClick={handleClick}>[Add new event]</h6>
      <form className={`${showAdd ? 'show' : ''} formAddEvent`} onSubmit={handleSubmit}>
        <div className='group'>
          <label htmlFor="title">Title</label>
          <input id='title' type="text" name='name' value={event.name ?? ''} onChange={handleChange} />
        </div>
        <div className="group">
          <label htmlFor="location">Location</label>
          <input id='location' type="text" name='location' value={event.location ?? ''} onChange={handleChange} />
        </div>
        <div className="group">
          <label htmlFor="description">Description</label>
          <input id='description' type="text" name='description' value={event.description ?? ''} onChange={handleChange} />
        </div>
        <div className="group-of-groups">
          <div className="group">
            <label htmlFor="date">Date</label>
            <input id='date' type="date" name='dateandtime' value={event.dateandtime} min={today} onChange={handleChange} />
          </div>
          <div className="group">
            <label htmlFor="time">Time</label>
            <input id='time' type="time" name='time' value={event.time} onChange={handleChange} />
          </div>
        </div>
        <div className="group">
          <label htmlFor="maxattendees">Max tickets</label>
          <input id='maxattendes' type="number" name='maxAttendees' value={event.maxAttendees ?? ''} onChange={handleChange} />
        </div>
        <button className={`${btn.primary} extra-space`} type='submit'>Add</button>
      </form>
    </div>
  )
}

export default AdminAddEvent
