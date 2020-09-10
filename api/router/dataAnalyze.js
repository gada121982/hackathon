const express = require('express')
const DataAnalyze = require('../controllers/DataAnalyze')
const app = express()

app.use('/dataanalyze', DataAnalyze.dataanalyze)

module.exports = app
