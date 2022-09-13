const http = require('http')
const { findAll } = require('./services/Todo.service')

const server = http.createServer(async (req, res) => {
    //response as json 
    // findAll(todos => {
    //     res.writeHead(200, {
    //         'Content-Type': 'application/json'
    //     })
    //     res.end(JSON.stringify(todos))
    // })
    res.writeHead(200, {
        'Content-Type': 'application/json'
    })
    // findAll().then(todos => {
    //     res.end(JSON.stringify(todos))
    // }).catch(err => {
    //     res.end(JSON.stringify({ err: err }))
    // })
    try {
        const todos = await findAll()
        res.end(JSON.stringify(todos))
    }
    catch (err) {
        res.end(JSON.stringify({ err: err }))
    }
})


server.listen(8080, () => {
    console.log(`Server is running on ${server.address().port}`)
})