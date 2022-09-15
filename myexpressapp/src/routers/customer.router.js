const express = require('express')
const customerRouter = express.Router()

//customer data 
const customers = [{
    id: 1,
    name: 'A1'
},
{
    id: 2,
    name: 'A2'
},
{
    id: 1,
    name: 'A3'
}
]


customerRouter.use((req, res, next) => {
    console.log('Customer Router Middleware')
    next()
})

customerRouter.get('/', (req, res) => {
    //return
    res.status(200).json(customers)
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
    //read payload 
    const customer = req.body ; //read payload 
    console.log(customer)
    res.status(201).json({status:'Created'})
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