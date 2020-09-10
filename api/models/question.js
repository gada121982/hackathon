const { Schema, model } = require('mongoose')

const question = new Schema({
  content: {
    type: String,
    required: true
  },
  yesCount: {
    type: Number
  },
  noCount: {
    type: Number
  },
  isBoolean: {
    type: Boolean
  },
  tag: {
    type: String
  }
}, {
  timestamps: true
})

module.exports = model('question', question, 'question')
