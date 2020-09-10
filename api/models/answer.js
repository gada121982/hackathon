const { Schema, model } = require('mongoose')

const answer = new Schema({
  tag: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

module.exports = model('answer', answer, 'answer')
