import React from 'react'
import BreweriesList from './BreweriesList'

class BreweriesContainer extends React.Component {
  state = {

  }

  render () {
    return (
      <div className="ui text container main-section">
        <h1>Breweries</h1>
        <BreweriesList breweries={this.props.breweries}/>
      </div>
    )
  }
}

export default BreweriesContainer;
