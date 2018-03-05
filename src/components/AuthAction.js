import React from 'react'
import LoginForm from './login/LoginForm'
import { NavLink } from 'react-router-dom'

class AuthAction extends React.Component {

  logoutWrapper = (e) => {
    e.preventDefault()
    this.props.logoutFn()
  }


  render() {
    return this.props.auth.loggedIn ?
      <NavLink to="/logout" onClick={ this.logoutWrapper }>Logout</NavLink> :
      <LoginForm login={ this.props.loginFn } />
    }
}

export default AuthAction