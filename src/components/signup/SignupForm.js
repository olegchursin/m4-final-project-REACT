import React from 'react'
import { Form, Modal } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import api from '../../api/adapter'

class SignupForm extends React.Component {
  state = {
    modalOpen: false,
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    dob: '',
    location: ''
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })


  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    this.saveUser()
  }

  saveUser = () => {
    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.confirmPassword,
      dob: this.state.dob,
      location: this.state.location
    }

    api.postUser(user).then(res => {
      console.log(res)
      this.setState({modalOpen: false})
    })

  }

  render() {
    return (
      <Modal
        trigger={<NavLink to="#" exact className="item" onClick={this.handleOpen}>Sign Up</NavLink>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <Modal.Header>Sign Up</Modal.Header>
        <Modal.Content>
          <Form onSubmit={(event) => {this.onFormSubmit(event)}}>
            <Form.Group widths='equal'>
              <Form.Input fluid label='Name:' name="name" value={this.state.name} onChange={this.onInputChange}/>
              <Form.Input fluid label='Password:' type="password" name="password" value={this.state.password} onChange={this.onInputChange} />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Input fluid label='Email:' name="email" value={this.state.email} onChange={this.onInputChange}/>
              <Form.Input fluid label='Confirm Password:' type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.onInputChange} />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Input fluid label='Location:' name="location" value={this.state.location} onChange={this.onInputChange}/>
              <Form.Input fluid label='Date Of Birth:' type="date" name="dob" value={this.state.dob} onChange={this.onInputChange} />
            </Form.Group>
            <Form.Button type="submit">Create Account</Form.Button>
          </Form>
        </Modal.Content>
      </Modal>
    )
  }
}


export default SignupForm