import React from 'react'
import { Button, Form } from 'semantic-ui-react'

const options = [
  { text: 'None', value: 'none' },
  { text: 'Name', value: 'name' },
  { text: 'Avg. Rating', value: 'rating' },
  { text: 'No. of Reviews', value: 'reviews' }
]

const BeerControls = (props) => {
  return (
    <div>
      <Form>
        <Form.Group widths='equal'>
          <Button fluid onClick={props.showNewBeerForm}>Add New Beer</Button>
          <Form.Input fluid label='Filter By Name:' value={props.nameQuery} onChange={props.handleNameChange}/>
          <Form.Input fluid label='Filter By Brewery:' value={props.breweryQuery} onChange={props.handleBreweryChange}/>
          <Form.Select fluid label=' ' options={options} placeholder='Sort By:' onChange={(e, {value}) => {props.handleSortChange(e, value)}}/>
        </Form.Group>

      </Form>
    </div>
  )
}

export default BeerControls