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
  genres:{
    type: Array,
    required: true,
  },
  status:{
    type: String,
    required: true
  },
  network:{
    type: String,
    required: true
  },
  cast:{
    type: Array,
    required: false
  },
  summary:{
    type: String,
    required: false
  }
})