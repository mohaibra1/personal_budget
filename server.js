const express = require('express')
const app = express('')
const morgan = require('morgan')
const bodyParser = require('body-parser')

//database functions 
const { getAllEnvelopes, addNewenvelope,getEnvelopeById, updateEnvelope, deleteEnvelope, transferEnvelope } = require('./server/db')

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
    console.log(req.body.id)
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

//update specific envelope
app.put('/:id', (req, res, next) => {
    console.log(req.body.id)
    const enevelopeToUpdate = updateEnvelope(req.body)
    if(enevelopeToUpdate){
        res.send(enevelopeToUpdate)
    }else{
        res.status(404).send('Nothing found to update')
    }
})

//delete specific envelope
app.delete('/:id', (req, res, next) => {
    const isDeleted = deleteEnvelope(req.params.id)
    if(isDeleted){
        res.status(204).send('is deleted')
    }
})

//Transfer budgets from different envelopes envelopes/transfer/:from/:to
app.post('/envelopes/transfer/:from/:to', (req, res, next) => {
    console.log(req.params.from + " " + req.params.to)
    const envelopeToTransfer = transferEnvelope(req.params.from, req.params.to)

    res.send(envelopeToTransfer)
})

//server listening port
app.listen(PORT, () => {
    console.log('This server is listening on port ' + PORT)
})