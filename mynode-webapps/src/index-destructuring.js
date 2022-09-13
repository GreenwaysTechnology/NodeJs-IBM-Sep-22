const { createServer } = require('http')

//handles all client request
const server = createServer((req, res) => {
    res.write("Hello")
    //close the stream
    res.end()
})

//start the server
server.listen(8080, () => {
    console.log('HTTP server is Running!!!')
})
