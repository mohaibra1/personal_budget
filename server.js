const express = require('express')
const app = express('')
const morgan = require('morgan')
const bodyParser = require('body-parser')

//database functions 
const { getAllEnvelopes } = require('./server/db')

//port
const PORT = process.env.PORT || 4001 

//configure morgan
app.use(morgan('dev'))

//get all envelopes
app.get('/', (req, res, next) => {
    console.log('Starting files....')
    res.send(getAllEnvelopes())
})

//create an envelope
app.use('/', (req, res, next) => {
    console.log('Creating new envelope....')
    res.send()
})

//server listening port
app.listen(PORT, () => {
    console.log('This server is listening on port ' + PORT)
})