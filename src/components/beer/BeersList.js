import React from 'react'
import BeerCard from './BeerCard'

const BeersList = (props) => {
  let allBeers = props.beers
  return (

      allBeers.map(b => {
        return <div key={b.id}><BeerCard beer={b} /></div>
      })

  )
}

export default BeersList
