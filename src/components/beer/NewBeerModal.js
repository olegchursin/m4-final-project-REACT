import React from 'react';
import { Button, Header, Form, Modal } from 'semantic-ui-react'
import styles from './beerStyles'

class NewBeerModal extends React.Component {
  state = {
    modalOpen: false,
    name: '',
    brewery: null,
    abv: '',
    style: ''
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })
  
  render() {
    return (
      <Modal
        trigger={<Button fluid onClick={this.handleOpen}>Add New Beer</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <Modal.Header>Add A New Beer</Modal.Header>
        <Modal.Content>
          
          <Form>
            
            <Form.Select fluid label='Style:' options={styles} />
          </Form>

        </Modal.Content>
  
      </Modal>
    )
  }
}

export default NewBeerModal