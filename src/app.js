const express = require('express')
const app = express()
const cors = require('cors')
const shows = require('./routes/Shows')

app.use(cors())
app.use(express.json())
app.use('/', shows)

module.exports = app