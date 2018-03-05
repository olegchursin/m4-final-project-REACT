import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Form, Modal } from 'semantic-ui-react'

class LoginForm extends React.Component {
  state = {email: '', password: ''}

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })


  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // handleEmailChange = (value) => {
  //   this.setState({email: value})
  // }

  // handlePasswordChange = (value) => {
  //   this.setState({password: value})
  // }

  onFormSubmit = (e) => {
    e.preventDefault()
    this.props.login(this.state.email, this.state.password)
  }


  render() {
    console.log(this.props)
    return (
      <Modal
        trigger={<NavLink to="/login" exact className="item" onClick={this.handleOpen}>Log In</NavLink>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <Modal.Header>Login</Modal.Header>
        <Modal.Content>
          <Form onSubmit={(event) => {this.onFormSubmit(event)}}>
            {/* <Form.Input fluid label='Email:' name="email" value={this.state.email} onChange={({value}) => {this.handleEmailChange(value)}}/>
            <Form.Input fluid label='Password:' name="password" value={this.state.password} onChange={({value}) => {this.handlePasswordChange(value)}} /> */}
            <Form.Input fluid label='Email:' name="email" value={this.state.email} onChange={this.onInputChange}/>
            <Form.Input fluid label='Password:' type="password" name="password" value={this.state.password} onChange={this.onInputChange} />
            <Form.Button type="submit">Login</Form.Button>
          </Form>
        </Modal.Content>
      </Modal>
      // <form onSubmit={this.onFormSubmit}>
      //   <input type="text" name="email" onChange={this.onInputChange} value={this.state.email} />
      //   <input type="password" name="password" onChange={this.onInputChange} value={this.state.password} />
      //   <input type="submit" />
      // </form>
    )
  }
}

export default LoginForm
