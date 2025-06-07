import { useEffect, useState } from 'react'
import '../css/packages.css'
import { getPackages } from '../services/eventService'
import { Link } from 'react-router-dom'

const Packages = ({ eventName}) => {
  const [packages, setPackages] = useState({})

  const fetchPackages = async () => {
    try {
      const result = await getPackages()
      setPackages(result)
    }
    catch (error) {
      console.error('Error fetching packages:', error)
    }
  }

  useEffect(() => {
    fetchPackages()
  }, [])

  return (
    <div className='packages'>
      <p className='packages-header'>Packages</p>
      <ul className='packages-ul'>
        {packages.length > 0 ? packages.map(p =>
          <li key={p.id} className='packages-li'>
            <Link to={`/event/details/booking/${encodeURIComponent(eventName.id)}?package=${p.id}`}>
              <div className='li-flex'>
                <p>{p.name}</p>
                <span>{p.price}</span>
              </div>
              <div className='li-seating'>
                <p>{p.type}</p>
                <p>{p.description}</p>
              </div>
            </Link>
          </li>
        ) : (<p>No packages</p>)}
      </ul>
    </div>
  )
}

export default Packages
