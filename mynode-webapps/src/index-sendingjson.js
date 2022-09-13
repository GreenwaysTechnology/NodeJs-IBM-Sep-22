const http = require('http')
const TODOS = require('./mock-data/todos')

const server = http.createServer((req, res) => {
    //response as json 
    res.writeHead(200, {
        'Content-Type': 'application/json'
    })
    const todos = JSON.stringify(TODOS)
    res.end(todos)

})


server.listen(8080, () => {
    console.log(`Server is running on ${server.address().port}`)
})