import React from 'react'
import BeerCard from './BeerCard'
// import { Grid } from 'semantic-ui-react'

const BeersList = (props) => {
  let allBeers = props.beers
  return (
    <div className={"ui four column stackable grid container"}>
      {allBeers.map(b => {
        return <div key={b.id}><BeerCard beer={b} /></div>
      })}
    </div>
  )
  return 
}

export default BeersList
