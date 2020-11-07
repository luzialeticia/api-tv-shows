const model = require('../models/showsSchema')

const getShows = (req, res) => {
  console.log(req.url)
  model.showsCollection.find((error, shows) => {
    if(error) {
      return res.status(500).send(error)
    } else {
      return res.status(200).send(shows)
    }
  })
}



module.exports = {
  getShows
}