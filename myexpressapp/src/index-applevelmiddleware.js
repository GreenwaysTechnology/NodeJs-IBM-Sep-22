const express = require('express')

const app = express();
const myMiddleware = require('./middlwares/my-middleware')

//configure the middleware 
app.use(myMiddleware({ id: 1, name: 'subramanian' }))
//global middleware is called for any request with any method
app.use((req, res, next) => {
    console.log('m2')
    next()
})
app.use((req, res, next) => {
    console.log('m3')
    next()
})
app.use((req, res, next) => {
    console.log('m4')
    next()
})


app.get('/', (req, res, next) => {
    res.send('Configurable middleware')
})
//url specific middleware
// app.get('/api/user', (req, res, next) => {
//     console.log('User Middleware')
//     next()
// })
// app.get('/api/user', (req, res, next) => {
//     res.send('user')
// })
//chaining middlwares and work flow with simple syntax
app.get('/api/user', (req, res, next) => {
    console.log('User Middleware-1')
    next()
}, (req, res, next) => {
    console.log('User Middleware2')
    next()
}, (req, res) => {
    res.send('Users')
})
app.listen(8080, () => {
    console.log('Express server is running')
})