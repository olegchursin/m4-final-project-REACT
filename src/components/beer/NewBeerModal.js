import React from 'react';
import { Button, Header, Form, Modal } from 'semantic-ui-react'
import styles from './beerStyles'
import api from '../../api/adapter'

class NewBeerModal extends React.Component {
  state = {
    modalOpen: false,
    name: '',
    brewery: '',
    abv: '',
    style: ''
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  handleNameChange = (value) => {
    this.setState({name: value})
  }

  handleAbvChange = (value) => {
    this.setState({abv: value})
  }

  handleBreweryChange = (value) => {
    this.setState({brewery: value})
  }

  handleAbvChange = (value) => {
    this.setState({abv: value})
  }

  handleStyleChange = (event, value) => {
    console.log(value)
    this.setState({style: value})
  }

  saveBeer = (state) => {
    const beer = {
      name: this.state.name,
      brewery: this.state.brewery,
      abv: this.state.abv,
      style: this.state.style
    }

    api.postNewBeer(beer)
  }
  
  render() {
    
    return (
      <Modal
        trigger={<Button fluid onClick={this.handleOpen}>Add New Beer</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        closeOnDimmerClick={false}
      >
        <Modal.Header>Add a New Beer<Button onClick={this.handleClose}>Close</Button></Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Group widths='equal'>
              <Form.Input fluid label='Name:' value={this.state.name} onChange={(event, {value}) => {this.handleNameChange(value)}}/>
              <Form.Input fluid label='Brewery:' value={this.state.brewery} onChange={(event, {value}) => {this.handleBreweryChange(value)}}/>
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Input fluid label='ABV:' value={this.state.abv} onChange={(event, {value}) => {this.handleAbvChange(value)}} />
              <Form.Select fluid label='Style:' options={styles} onChange={(e, { value }) => {this.handleStyleChange(e, value)}}/>
            </Form.Group>
            <Form.Button>Save</Form.Button>
          </Form>
        </Modal.Content>
      </Modal>
    )
  }
}

export default NewBeerModal