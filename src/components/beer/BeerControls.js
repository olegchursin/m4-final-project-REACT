import React from 'react'
import { Button, Form } from 'semantic-ui-react'

const options = [
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
          <Form.Input fluid label='Name:' value={props.beerNameFilter} onChange={props.setBeerNameFilter}/>
          <Form.Input fluid label='Brewery:' value={props.breweryFilter} onChange={props.setBreweryFilter}/>
          <Form.Select fluid label=' ' options={options} placeholder='Sort By:' />
        </Form.Group>

      </Form>
    </div>
  )
}

export default BeerControls