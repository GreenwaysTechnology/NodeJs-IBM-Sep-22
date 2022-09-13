const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, 'assets/info.txt')
    //fileSize
    const fileSize = fs.statSync(filePath)
    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Content-Length': fileSize.size
    })
    let readStream = fs.createReadStream(filePath)
    //write into http response stream
    readStream.pipe(res)

})

server.listen(8080, () => {
    console.log(`Server is running at ${server.address().port}`)
})