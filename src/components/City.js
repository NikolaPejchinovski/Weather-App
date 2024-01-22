import React from 'react'

const City = ( { text, weather, feeling, wind, rain } ) => {
  return (
    <div className='city-info'>
        <h1>{text}</h1>
        <h3>{weather}</h3>
        <h4>{feeling}</h4>
        <h4>{wind}</h4>
        <h4>{rain}</h4>
    </div>
  )
}

export default City