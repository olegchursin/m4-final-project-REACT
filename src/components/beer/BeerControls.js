import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import NewBeerModal from './NewBeerModal'

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
          <NewBeerModal breweries={props.breweries} addBeerToList={props.addBeerToList}/>
          <Form.Input fluid label='Filter By Name:' value={props.nameQuery} onChange={props.handleNameChange}/>
          <Form.Input fluid label='Filter By Brewery:' value={props.breweryQuery} onChange={props.handleBreweryChange}/>
          <Form.Select fluid label='Sort By:' options={options} onChange={(e, {value}) => {props.handleSortChange(e, value)}}/>
        </Form.Group>
      </Form>
    </div>
  )
}

export default BeerControls