const express = require('express')

// console.log(express)
const app = express()

// console.log(app)
//home page:
app.get("/", (req, res) => {
    res.end('Welcome to Express App - Home Page!!!')
})
//REST API:
app.get('/api/customers',(req,res)=>{
    res.end('Customers-Get')
})
app.post('/api/customers/create',(req,res)=>{
    res.end('Customers-POST')
})
app.put('/api/customers/update',(req,res)=>{
    res.end('Customers-UPDATE')
})
app.delete('/api/customers/remove',(req,res)=>{
    res.end('Customers-Delete')
})
app.get('/api/users',(req,res)=>{
    res.end('users-Get')
})
app.post('/api/users/create',(req,res)=>{
    res.end('USERS-POST')
})
app.put('/api/users/update',(req,res)=>{
    res.end('USERS-UPDATE')
})
app.delete('/api/users/remove',(req,res)=>{
    res.end('USERS-Delete')
})

//start server
app.listen(3000, () => {
    console.log('Express Server is running')
})