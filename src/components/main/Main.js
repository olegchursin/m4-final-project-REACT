import React from 'react'
import Hero from './Hero'
import MainBeerList from './MainBeerList'
import MainBreweriesList from './MainBreweriesList'

const Main = (props) => {
  return (
    <div>
      <Hero />
      <div className="ui container">
        <h2 id="main-beers">Beers</h2>
        <MainBeerList beers={props.beers} />
        <h2 id="main-breweries">Breweries</h2>
        <MainBreweriesList breweries={props.breweries} />
      </div>

    </div>
  )
}

export default Main
