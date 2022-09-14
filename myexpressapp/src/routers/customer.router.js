const express = require('express')
const customerRouter = express.Router()

customerRouter.get('/', (req, res) => {
    res.end('Customers-Get!!!')
})
customerRouter.get('/:id', (req, res) => {
    const params = req.params
    console.log(params)
    res.end('Customers-Get!!!' + params.id)
})
customerRouter.get('/search/bycity', (req, res) => {
    const params = req.query
    console.log(params)
    res.end('Customers-search!!!')
})


customerRouter.post('/create', (req, res) => {
    res.end('Customers-POST')
})


customerRouter.put('/update/:id', (req, res) => {
    const params = req.params
    console.log(params)
    res.end('Customers-UPDATE')
})
customerRouter.delete('/remove/:id', (req, res) => {
      res.end('Customers-Delete')
})
//
module.exports = customerRouter;