import React from 'react'
import Hero from './Hero'
import MainBeerList from './MainBeerList'
import MainBreweriesList from './MainBreweriesList'
import ScrollableAnchor from 'react-scrollable-anchor'
import { Divider } from 'semantic-ui-react'


const Main = (props) => {
  return (
    <div>
      <Hero />
      <div className="ui container">
        <Divider hidden section />
        <ScrollableAnchor id={'main-beers'}>
          <h2>Beers</h2>
        </ScrollableAnchor>
        <Divider section />
        <MainBeerList beers={props.beers} />
        <Divider hidden section />
        <ScrollableAnchor id={'main-breweries'}>
          <h2>Breweries</h2>
        </ScrollableAnchor>
        <Divider section />
        <MainBreweriesList breweries={props.breweries} />
        <Divider hidden section />
      </div>

    </div>
  )
}

export default Main
