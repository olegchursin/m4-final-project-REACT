import React from 'react'

const NavBar = (props) => {
  return (
    <div className="ui top fixed menu">
      <div className="item">
        <img className="nav-logo" src="../img/logo.svg" alt="logo"/>
      </div>
      <a className="item">Beers</a>
      <a className="item">Breweries</a>
      <a className="item">Reviews</a>
      <div className="right menu">
        <a className="item">Sign In</a>
      </div>
    </div>
  )
}

export default NavBar
