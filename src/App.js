import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './css/App.css';
import api from './api/adapter'

import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Main from './components/main/Main'
import BeersContainer from './components/beer/BeersContainer'
import BreweriesContainer from './components/brewery/BreweriesContainer'
import ReviewsContainer from './components/review/ReviewsContainer'
import BeerPage from './components/beer/BeerPage'

class App extends Component {

  state = {
    beers: [],
    breweries: [],
    beersArray: [],
    breweriesArray: [], // used in the AddNewBeer dropdown
    reviews: [],
    selectedBeer: null,
    auth: {
      loggedIn: false,
    }
  }

  addBeerToList = (beer) => {
    this.setState(
      { beers: [beer, ...this.state.beers]}
    )
  }

  addBreweryToList = (brewery) => {
    this.setState(
      { breweries: [brewery, ...this.state.breweries]}
    )
  }

  addReviewToList = (review) => {
    this.setState(
      { reviews: [review, ...this.state.reviews]}
    )
  }

  makeBreweriesList = () => this.setState({
    breweriesArray:
      this.state.breweries.map(brewery => {
        return { text: brewery.name, value: brewery.id }
    })
  })

  makeBeersList = () => this.setState({
    beersArray:
      this.state.beers.map(beer => {
        return { text: beer.name, value: beer.id }
    })
  })

  componentDidMount() {

    api.getAllBeers()
      .then(res => {
        this.setState({beers: res})
        this.makeBeersList()
      })

    api.getAllBreweries()
      .then(res => {
        this.setState({breweries: res})
        this.makeBreweriesList()
      })

    api.getAllReviews()
      .then(res => this.setState({reviews: res}))

    const token = localStorage.getItem('token')
    if (token) {
      this.setState({
        auth: {
          loggedIn: true,
          token: token
        }
      })
    }
  }

  login = (email, password) => {
    api.login(email, password).then(j => {
      if(j.error) {
        alert(j.error)
      } else {
        localStorage.setItem('token', j.token)
        this.setState({
          auth: {
            loggedIn: true,
            token: j.token
          }
        })
      }
    })
  }

  logout = () => {
    localStorage.removeItem('token')
    this.setState({
      auth: {
        loggedIn: false,
        token: undefined
      }
    })
  }


  render() {
    return (
      <Router>
        <div>
          <NavBar loginFn={this.login} logoutFn={this.logout} auth={this.state.auth}/>
          <Route exact path="/" render={() => {
            return (
              <Main beers={this.state.beers} breweries={this.state.breweries} />
            )
          }} />
          <Route path="/beers/:id" render={() => {
            return (
              <BeerPage beer={this.state.selectedBeer}/>
            )
          }} />
          <Route exact path="/beers" render={() => {
            return (
              <BeersContainer
                beers={this.state.beers}
                breweriesArray={this.state.breweriesArray}
                addBeerToList={this.addBeerToList}
                loggedIn={this.state.auth.loggedIn}
                />
            )
          }} />
          <Route exact path="/breweries" render={() => {
            return (
              <BreweriesContainer
                breweries={this.state.breweries}
                addBreweryToList={this.addBreweryToList}
                loggedIn={this.state.auth.loggedIn}
              />
            )
          }} />
          <Route exact path="/reviews" render={() => {
            return (
              <ReviewsContainer
                reviews={this.state.reviews}
                addReviewToList={this.addReviewToList}
                beersArray={this.state.beersArray}
                loggedIn={this.state.auth.loggedIn}
              />
            )
          }} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
