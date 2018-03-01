import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './css/App.css';
import api from './api/adapter'

import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Main from './components/Main'
import BeersContainer from './components/beer/BeersContainer'
import BreweriesContainer from './components/brewery/BreweriesContainer'
import ReviewsContainer from './components/review/ReviewsContainer'
import LoginContainer from './components/login/LoginContainer'

class App extends Component {

  state = {
    beers: [],
    breweries: [],
    reviews: [],
    selectedBeer: null
  }

  componentDidMount() {
    api.getAllBeers()
      .then(res => this.setState({beers: res}))

    api.getAllBreweries()
    .then(res => this.setState({breweries: res}))
  }


  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={Main} />
          <Route exact path="/beers" render={() => {
            return (
              <BeersContainer beers={this.state.beers}/>
            )
          }} />
          <Route exact path="/breweries" component={BreweriesContainer} />
          <Route exact path="/reviews" component={ReviewsContainer} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/beers/:id" render={() => {
            return (
              <BeerPage />
            )
          }}
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
