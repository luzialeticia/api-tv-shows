const mongoose = require('mongoose')
const Schema = mongoose.Schema

const showSchema = new Schema({
  _id:{
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
    required: true
  },
  title:{
    type: String,
    required: true
  },
  genres:[{
    type: String,
    required: true,
  }],
  ended:{
    type: Boolean,
    required: true
  },
  network:{
    type: String,
    required: true
  },
  cast:[{
    type: String,
    required: true
  }],
  summary:{
    type: String,
    required: false
  }
})

const showsCollection = mongoose.model('shows', showSchema)

module.exports = {showsCollection}