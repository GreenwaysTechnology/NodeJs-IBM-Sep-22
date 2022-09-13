const http = require('http')

const server = http.createServer((req, res) => {
    //how to read data from the client.
    //attach listener on request object
    let data = ''
    req.on('data', chunk => {
        data += chunk
    });
    req.on('end', () => {
        let res = JSON.parse(data)
        console.log(res)
    })
    res.end('hello')
});


server.listen(8080, () => {
    console.log(`Server is running on ${server.address().port}`)
})
