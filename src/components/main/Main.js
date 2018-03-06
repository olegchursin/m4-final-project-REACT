import React from 'react'
import Hero from './Hero'
import MainBeerList from './MainBeerList'
import MainBreweriesList from './MainBreweriesList'
import ScrollableAnchor from 'react-scrollable-anchor'

const Main = (props) => {
  return (
    <div>
      <Hero />
      <div className="ui container">
        <ScrollableAnchor id={'main-beers'}>
          <h2>Beers</h2>
        </ScrollableAnchor>
        <MainBeerList beers={props.beers} />
        <ScrollableAnchor id={'main-breweries'}>
          <h2>Breweries</h2>
        </ScrollableAnchor>
        <MainBreweriesList breweries={props.breweries} />
      </div>

    </div>
  )
}

export default Main
