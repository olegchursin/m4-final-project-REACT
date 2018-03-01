import React from 'react'
import BeersList from './BeersList'

class BeersContainer extends React.Component {
  state = {

  }

  render () {
    return (
      <div className="ui text container main-section">
        <h1>Beers</h1>
        <BeersList beers={this.props.beers}/>
      </div>
    )
  }
}

export default BeersContainer;
