import React from 'react'

const City = ( { text, weather } ) => {
  return (
    <div className='city-info'>
        <h1>{text}</h1>
        <h4>{weather}</h4>
    </div>
  )
}

export default City