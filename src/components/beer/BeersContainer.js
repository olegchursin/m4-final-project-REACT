import React from 'react'
import BeersList from './BeersList'
import BeerControls from './BeerControls'

class BeersContainer extends React.Component {
  state = {

  }

  render () {
    return (
      <div className="ui text container main-section">
        <BeerControls />
        <BeersList beers={this.props.beers}/>
      </div>
    )
  }
}

export default BeersContainer;
