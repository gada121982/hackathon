const express = require('express')
const questionanalyze = require('../controllers/QuestionAnalyze')
const app = express()

app.use('/questionanalyze', questionanalyze.questionanalyze)

module.exports = app
