const express = require('express')

const app = express();

//you can intercept req do something
app.get('/', (req, res, next) => {
    console.log(req.url)
    console.log(req.headers)
    console.log(req.baseUrl)
    //set custom response header
    res.set({
        'company':'IBM'
    })
    next()
})
app.get('/', (req, res, next) => {
    res.end('response')
})

app.listen(8080, () => {
    console.log('Express server is running')
})
