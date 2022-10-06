import React from 'react'

function CityItem({ city }) {
  return (
    <div>
      <div>{city.name}</div>
      <div>{city.temp}</div>
    </div>
  )
}

export default CityItem
