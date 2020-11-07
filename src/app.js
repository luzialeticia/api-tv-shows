const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./models/repository')
const shows = require('./routes/Shows')

db.connect()

app.use(cors())
app.use(express.json())
app.use('/', shows)

module.exports = app