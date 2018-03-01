import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './css/App.css';
import api from './api/adapter'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Main from './components/Main'

class App extends Component {

  state = {
    beers: [],
    breweries: [],
    reviews: []
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
          {/* <Route exact path="/beers" render={BeersContainer} />
          <Route exact path="/breweries" render={BreweriesContainer} />
          <Route exact path="/reviews" render={ReviewsContainer} /> */}
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
