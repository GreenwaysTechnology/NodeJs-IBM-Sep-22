const http = require('http')
// console.log(http)

//handles all client request
const requestListener = (req, res) => {
    res.write("Hello")
    //close the stream
    res.end()
}
const server = http.createServer(requestListener)

//start the server
server.listen(8080,()=>{
    console.log('HTTP server is Running!!!')
})
