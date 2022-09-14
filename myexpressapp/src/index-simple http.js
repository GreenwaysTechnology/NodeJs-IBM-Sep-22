const express = require('express')

// console.log(express)
const app = express()

// console.log(app)
//home page:
app.get("/", (req, res) => {
    res.end('Welcome to Express App - Home Page!!!')
})

//start server
app.listen(3000, () => {
    console.log('Express Server is running')
})