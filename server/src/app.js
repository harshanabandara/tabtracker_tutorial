console.log('hello')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
/*
cors need when server needs to be accessed bydifferent domains
*/
app.get('/status', (req, res) => {
  res.send({
    messege: 'hello from simple server :)'
  })
})

app.post('/register', (req, res) => {
  res.send({
    messege: `Hello ${req.body.email} Your user was registered. now bugger off!`
  })
})
app.listen(process.env.PORT || 8081)
