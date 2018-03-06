import React from 'react'
import { NavLink } from 'react-router-dom'
import { Form, Modal } from 'semantic-ui-react'

class LoginForm extends React.Component {
  state = {email: '', password: ''}

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })


  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    this.props.login(this.state.email, this.state.password)
  }


  render() {
    return (
      <Modal
        trigger={<NavLink to="/login" exact className="item" onClick={this.handleOpen}>Log In</NavLink>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <Modal.Header>Login</Modal.Header>
        <Modal.Content>
          <Form onSubmit={(event) => {this.onFormSubmit(event)}}>
            <Form.Input fluid label='Email:' name="email" value={this.state.email} onChange={this.onInputChange}/>
            <Form.Input fluid label='Password:' type="password" name="password" value={this.state.password} onChange={this.onInputChange} />
            <Form.Button type="submit">Login</Form.Button>
          </Form>
        </Modal.Content>
      </Modal>
    )
  }
}

export default LoginForm
