import React from 'react'
import BeerCard from '../beer/BeerCard'

const BeersList = (props) => {
  let allBeers = props.beers
  return (
    <div className={"ui four column stackable grid container"}>
      {allBeers.slice(0, 6).map(b => {
        return <div key={b.id}><BeerCard beer={b} /></div>
      })}
    </div>
  )
}

export default BeersList
