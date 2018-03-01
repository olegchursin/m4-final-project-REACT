import React from 'react'
import Beer from './Beer'

const BeersList = (props) => {
  let allBeers = props.beers
  return (
    
      allBeers.map(b => {
        return <div key={b.id}><Beer beer={b} /></div>
      })
    
  )
}

export default BeersList
