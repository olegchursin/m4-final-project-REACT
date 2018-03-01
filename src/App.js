import React, { Component } from 'react';
import './css/App.css';
import api from './api/adapter'

class App extends Component {

  componentDidMount() {
    api.getAllBeers()
      .then(console.log)
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
