const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const rfs = require('rotating-file-stream')
const router = require('./router/index')
const { join } = require('path')
const http = require('http').Server(app)
const io = require('socket.io')(http)
const handleSocket = require('./socket/handleSocket')

require('dotenv').config()

const accessLogStream = rfs('access.log', {
  interval: '1d',
  path: join(__dirname, 'log')
})

app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('public'))
app.use(cors())
app.use(helmet())
app.use(morgan('combined', { stream: accessLogStream }))
app.use(cookieParser(process.env.COOKIE_KEY))
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

mongoose
  .connect('mongodb+srv://gcallshackathon:gcallshackathon@gcalls-hackathon.tkqhs.mongodb.net/gcallshackathon?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log('connect dbs succesfully !')
  })
  .catch(err => {
    console.log(`we have an error: ${err}`)
    process.exit()
  })

app.get('/', (req, res) => {
  res.render('main')
})

app.use('/api/question', router.questionAnalyze)
app.use('/api/data', router.dataAnalyze)

handleSocket(io)

http.listen(process.env.PORT || 8000, () => {
  console.log('app listen on port', process.env.PORT || 8000)
})
