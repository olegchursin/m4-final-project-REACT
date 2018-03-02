const api = {
  getAllBeers: () => {
    return fetch('http://localhost:3000/beers')
      .then(res => res.json())
  },

  postNewBeer: (beer) => {
    return fetch('http://localhost:3000/beers', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(beer)
    }).then(res => res.json())
  },

  updateBeer: (id) => {
    return fetch('')
  },

  getAllBreweries: () => {
    return fetch('http://localhost:3000/breweries')
      .then(res => res.json())
  },

  getAllReviews: () => {
    return fetch('')
  }

}

export default api

