const express = require('express')
const router = express.Router()
const controller = require('../controllers/Shows')
const cors = require('cors')

router.get('/shows', cors(), controller.getShows)
router.get('/shows/:id', cors(), controller.getShowById)
router.post('/shows', cors(), controller.addShow)
router.put('/shows/:id', cors(), controller.updateShow)
router.delete('/shows/:id', cors(), controller.deleteShow)

module.exports = router