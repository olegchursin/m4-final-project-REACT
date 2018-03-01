const api = {
  getAllBeers: () => {
    return fetch('http://localhost:3000/beers')
      .then(res => res.json())
  },

  postNewBeer: (beer) => {
    return fetch('')
  },

  updateBeer: (id) => {
    return fetch('')
  },

  

  getAllBreweries: () => {
    return fetch('')
  },

  getOneBrewery: () => {
    return fetch('')
  },

  getAllReviews: () => {
    return fetch('')
  }

}

export default api

