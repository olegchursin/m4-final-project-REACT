const api = {
  getAllBeers: () => {
    return fetch('http://localhost:3000/beers')
      .then(res => res.json())
  },

  postNewBeer: (beer) => {
    return fetch('http://localhost:3000/beers')
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

