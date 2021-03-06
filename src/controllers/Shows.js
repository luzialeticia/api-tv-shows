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

const getShowById = (req, res) => {
  const id = req.params.id
  model.showsCollection.findById(id, (error, show) => {
    if(error) {
      return res.status(404).send('Show not found.')
    }
    if(show) {
      return res.status(200).send(show)
    }
  })
}

const addShow = (req, res) => {
  const showBody = req.body
  const show = new model.showsCollection(showBody)

  show.save((error) => {
    if(error) {
      return res.status(400).send(error)
    } else {
      return res.status(201).send(show)
    }
  })
}

const updateShow = (req, res) => {
  const id = req.params.id
  const showBody = req.body
  const updatedShow = {new: true}

  model.showsCollection.findByIdAndUpdate(
    id,
    {$set:{showBody}},
    updatedShow,
    (error, show) => {
      if(error) {
        return res.status(404).send('Show not found.')
      }
      if(show) {
        return res.status(200).send(show)
      }
    }
  )
}

const deleteShow = (req, res) => {
  const id = req.params.id
  model.showsCollection.findByIdAndDelete(id, (error, show) => {
    if(error) {
      return res.status(404).send('Show not found.')
    }
    if(show) {
      return res.status(200).send('Show deleted.')
    }
  })
}

module.exports = {
  getShows,
  getShowById,
  addShow,
  updateShow,
  deleteShow
}