import React from 'react'
import { Button } from 'semantic-ui-react'

class Hero extends React.Component {
  render () {
    return (
      <div id="hero" className="Hero" style={{backgroundImage: 'url(../../img/hero-background.jpg)'}}>
			<div className="content">
				<img className="logo" src="../../img/beer-2.svg" alt="beer" />
				<h2>Refreshing simplicity of be(er)ing</h2>
				<p>Goliaths are tumbling, Davids are ascendant, a 200-year-old brewery industry has sextupled its establishments. Enjoy the rebirth of craft beer.</p>
				<div className="button-wrapper">
          <Button color='red'>Explore beers</Button>
          <Button secondary>View breweries</Button>
				</div>
			</div>
		</div>
    )
  }
}

export default Hero;
