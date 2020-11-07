const mongoose = require('mongoose')
const DB_URL = 'mongodb://localhost:27017/'

const connect = () => {
  mongoose.connect(DB_URL, {usedNewUrlParser: true})
  const connection = mongoose.connection
  connection.on('error', () => console.error('Error on connection!'))
  connection.once('open', () => console.log('Database connected!'))
}

module.exports = connect