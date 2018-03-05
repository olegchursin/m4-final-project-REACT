import React from 'react';
import { Button, Header, Form, Modal } from 'semantic-ui-react'
import ReactFilestack from 'filestack-react';

import styles from './beerStyles'
import api from '../../api/adapter'

class NewBeerModal extends React.Component {
  state = {
    modalOpen: false,
    name: '',
    brewery: '',
    abv: '',
    style: '',
    url: ''
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
      style: this.state.style,
      url: this.state.url
    }

    api.postNewBeer(beer)
  }

  onSuccess = (result) => {
    this.setState({
      url: result.filesUploaded[0].url
    })
  }; // works

  onError = error => {
    console.error('error', error);
  };

  render() {

    const apikey = "Acu94EFL1STGYvkM6a8usz"
    const basicOptions = {
      accept: 'image/*',
      fromSources: ['local_file_system'],
      maxSize: 1024 * 1024,
      maxFiles: 3,
    };

    return (
      <Modal
        trigger={<Button fluid onClick={this.handleOpen}>Add New Beer</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <Modal.Header>Add a New Beer</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Group widths='equal'>
              <Form.Input fluid label='Name:' value={this.state.name} onChange={(event, {value}) => {this.handleNameChange(value)}}/>
              <Form.Input fluid label='Brewery:' value={this.state.brewery} onChange={(event, {value}) => {this.handleBreweryChange(value)}}/>
              <ReactFilestack
                apikey={apikey}
                buttonText="Upload image"
                buttonClass="ui medium button gray"
                options={basicOptions}
                onSuccess={this.onSuccess}
                onError={this.onError}
              />
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
