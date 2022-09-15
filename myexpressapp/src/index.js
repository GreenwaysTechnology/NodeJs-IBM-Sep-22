const express = require('express')
const customerRouter = require('./routers/customer.router')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const fs = require('fs')
const path = require('path')
const employeeRouter = require('./routers/employee.router')
// get driver connection
const dbo = require("./db");

const app = express()

//register middlewares
app.use(bodyParser.json())
//logger
// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))

//connecting router with application object, so that routing will happen.
app.use('/api/customers', customerRouter);
app.use('/api/employees', employeeRouter)

// app.use((err, req, res, next) => {
//     res.status(500).send('something went wrong')
// })


//home page:
app.get("/", (req, res) => {
    res.end('Welcome to Express App - Home Page!!!')
})

//start server
app.listen(3000, () => {
    // perform a database connection when server starts
    dbo.connectToServer(function (err) {
        if (err) console.error(err);
    });
    console.log(`Server is running on port: ${3000}`);
});