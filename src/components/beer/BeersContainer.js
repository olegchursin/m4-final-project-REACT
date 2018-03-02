import React from 'react'
import BeersList from './BeersList'
import BeerControls from './BeerControls'
import api from '../../api/adapter'

class BeersContainer extends React.Component {
  state = {
    beers: [],
    sort: 'none',
    nameQuery: '',
    breweryQuery: ''
  }

  nameSort = (beers) => {
    return beers.sort(function(a, b){
      return a.name.localeCompare(b.name)
    })
  }

  // TODO: add sort logic
  ratingSort = (beers) => {
    return beers
  }

  reviewsSort = (beers) => {
    return beers
  }

  nameFilter = (beers, nameQuery) => {
    if (this.state.nameQuery) {
      return beers.filter(function(beer) {
        return beer.name.toLowerCase().includes(nameQuery.toLowerCase())
      })
    } else {
      return beers
    }
  }

  breweryFilter = (beers, breweryQuery) => {
    if (this.state.breweryQuery) {
      return beers.filter(function(beer) {
        return beer.brewery.name.toLowerCase().includes(breweryQuery.toLowerCase())
      })
    } else {
      return beers
    }
  }

  handleSortChange = (event, value) => {
    console.log(value)
    this.setState({sort: value})
  }

  handleNameChange = (event) => {
    this.setState({nameQuery: event.target.value})
  }

  handleBreweryChange = (event) => {
    this.setState({breweryQuery: event.target.value})
  }

  sortBeers = (beers) => {
    const beersToRender = [...this.state.beers]
    switch(this.state.sort) {
      case "none": return this.state.beers
      case "name": return this.nameSort(beersToRender)
      case "rating": return this.ratingSort(beersToRender)
      case "reviews": return this.reviewsSort(beersToRender)
      default: return beers
    }
  }

  componentDidMount() {
    api.getAllBeers()
      .then(res => this.setState({beers: res}))
  }

  render () {
    const sortedBeers = this.sortBeers(this.state.beers)
    const nameFilteredBeers = this.nameFilter(sortedBeers, this.state.nameQuery)
    const breweryFilteredBeers = this.breweryFilter(nameFilteredBeers, this.state.breweryQuery)
    return (
      <div className="ui text container main-section">
        <BeerControls
          handleSortChange={this.handleSortChange}
          nameQuery={this.state.nameQuery}
          breweryQuery={this.state.breweryQuery}
          handleNameChange={this.handleNameChange}
          handleBreweryChange={this.handleBreweryChange}
        />
        <BeersList beers={breweryFilteredBeers}/>
      </div>
    )
  }
}

export default BeersContainer;
