import React from 'react'
import { NavLink } from 'react-router-dom'

const BeerCard = (props) => {
  let beer = props.beer
  return (
    <div className="ui link cards">
      <div className="card">
        <div className="image">
          <img src={beer.url ? beer.url : '../../../img/logo.png' } alt={beer.name} />
        </div>
        <div className="content">
          <div className="header">{beer.name}</div>
          <div className="meta">
            <NavLink to="/">{beer.brewery.name}</NavLink>
          </div>
          <div className="description">
            <h4>{beer.abv}% ABV <strong>{beer.style}</strong></h4>
            {beer.description}
          </div>
        </div>
        <div className="extra content">
          <span className="right floated">
            Avg. rating
          </span>
          <span>
            <i className="user icon"></i>
            No. of reviews
          </span>
        </div>
      </div>
    </div>

  )
}

export default BeerCard
