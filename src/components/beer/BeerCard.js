import React from 'react'
import { NavLink } from 'react-router-dom'
import { Card, Icon, Image } from 'semantic-ui-react'

const BeerCard = (props) => {
  let beer = props.beer
  return (
    <Card>
      <Image src={beer.url ? beer.url : '../../../img/logo.png' } alt={beer.name} />
      <Card.Content>
        <Card.Header>{beer.name}</Card.Header>
        <Card.Meta><NavLink to="/">{beer.brewery.name}</NavLink></Card.Meta>
        <Card.Description>
        <h4>{beer.abv}% ABV <strong>{beer.style}</strong></h4>
          {beer.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <span className="right floated">
          Avg. rating
        </span>
        <span>
          No. of reviews
        </span>
        </Card.Content>
    </Card>

    // <div className="ui link cards">
    //   <div className="card">
    //     <div className="image">
    //       <img src={beer.url ? beer.url : '../../../img/logo.png' } alt={beer.name} />
    //     </div>
    //     <div className="content">
    //       <div className="header">{beer.name}</div>
    //       <div className="meta">
    //         <NavLink to="/">{beer.brewery.name}</NavLink>
    //       </div>
    //       <div className="description">
    //         <h4>{beer.abv}% ABV <strong>{beer.style}</strong></h4>
    //         {beer.description}
    //       </div>
    //     </div>
    //     <div className="extra content">
    //       <span className="right floated">
    //         Avg. rating
    //       </span>
    //       <span>
    //         <i className="user icon"></i>
    //         No. of reviews
    //       </span>
    //     </div>
    //   </div>
    // </div>

  )
}

export default BeerCard
