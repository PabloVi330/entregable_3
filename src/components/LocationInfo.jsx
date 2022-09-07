import React from 'react'
import './locationInfo.css'
const LocationInfo = ({location}) => {
  return (
    <article className = "locationinfo" >
      <h1>location info</h1>
        <h3>{location?.name}</h3>
        <ul className='list_info'>
          <li><span>Type: </span>{location?.type}</li>
          <li><span>Dimension: </span>{location?.dimension}</li>
          <li><span>Population: </span> {location?.residents.length}</li>
        </ul>
        
    </article>
  )
}

export default LocationInfo