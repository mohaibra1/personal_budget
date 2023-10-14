const express = require('express')
const app = express('')
const morgan = require('morgan')
const bodyParser = require('body-parser')

//database functions 
const { getAllEnvelopes, addNewenvelope,getEnvelopeById } = require('./server/db')

//port
const PORT = process.env.PORT || 4001 

//bodyParser
app.use(bodyParser.json())

//configure morgan
app.use(morgan('dev'))

//get all envelopes
app.get('/', (req, res, next) => {
    console.log('Starting files....')
    res.send(getAllEnvelopes())
})

//create an envelope
app.post('/', (req, res, next) => {
    console.log('Creating new envelope....')
    console.log(req.body)
    const newEnvelope = addNewenvelope(req.body)
    if(newEnvelope){
        res.send(newEnvelope)
    }else {
        res.status(404).send('Empty keys!')
    }
   
})

//retrieve specific envelope
app.get('/:id', (req, res, next) => {
    console.log(req.params.id)
    res.send(getEnvelopeById(req.params.id))
})

//update envelope


//server listening port
app.listen(PORT, () => {
    console.log('This server is listening on port ' + PORT)
})