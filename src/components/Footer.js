import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = (props) => {
  return (
    <div className="ui inverted vertical footer segment">
      <NavLink to="/" exact><img src="../img/logo-wh.svg" className="ui centered image footer-img" alt="logo" /></NavLink>
    </div>
  )
}

export default Footer
