const express = require('express')
const customerRouter = express.Router()

customerRouter.get('/', (req, res) => {
    res.end('Customers-Get!!!')
})
customerRouter.post('/create', (req, res) => {
    res.end('Customers-POST')
})
customerRouter.put('/update', (req, res) => {
    res.end('Customers-UPDATE')
})
customerRouter.delete('/remove', (req, res) => {
    res.end('Customers-Delete')
})
//
module.exports = customerRouter;