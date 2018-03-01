import React, { Component } from 'react';
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
      .then((beers) => )
  }


  render() {
    return (
      <div>
        <NavBar />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
