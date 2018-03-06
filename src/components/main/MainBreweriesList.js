import React from 'react'
import BreweryCard from '../brewery/BreweryCard'

const BreweriesList = (props) => {
  let allBreweries = props.breweries
  return (
    <div className={"ui four column stackable grid container"}>
      {allBreweries.slice(0, 6).map(b => {
        return <div key={b.id}><BreweryCard brewery={b} /></div>
      })}
    </div>
  )
}

export default BreweriesList
