import React from 'react'

const Temperature = ({ weathericon, celsius }) => {
  return (
    <div className='temperature-info'>
        <h1 className='celsius'>{celsius}</h1>
        <img className='weather-icon' src={weathericon} alt="weather-icon" />
    </div>
  )
}

export default Temperature