const express = require('express')
const customerRouter = require('./routers/customer.router')

const app = express()

//connecting router with application object, so that routing will happen.
app.use('/api/customers',customerRouter);

//home page:
app.get("/", (req, res) => {
    res.end('Welcome to Express App - Home Page!!!')
})

//start server
app.listen(3000, () => {
    console.log('Express Server is running')
})