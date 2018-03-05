import React from 'react'
import { NavLink } from 'react-router-dom'
import LoginForm from './login/LoginForm'

const NavBar = (props) => {
  return (
    <div className="ui top fixed menu">
      <div className="item">
        <NavLink to="/" exact><img className="nav-logo" src="../img/logo.svg" alt="logo"/></NavLink>
      </div>
      <NavLink to="/beers" exact className="item">Beers</NavLink>
      <NavLink to="/breweries" exact className="item">Breweries</NavLink>
      <NavLink to="/reviews" exact className="item">Reviews</NavLink>
      <div className="right menu">
        <LoginForm />
        {/* <NavLink to="/login" exact className="item">Log In</NavLink> */}
      </div>
    </div>
  )
}

export default NavBar
