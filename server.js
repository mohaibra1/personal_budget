const express = require('express')
const app = express('')
const morgan = require('morgan')

//port
const PORT = process.env.PORT || 4001 

//configure morgan
app.use(morgan('dev'))

app.get('/', (req, res, next) => {
    console.log('Starting files....')
    res.send({envelopes: 'Envelopes'})
})


//server listening port
app.listen(PORT, () => {
    console.log('This server is listening on port ' + PORT)
})