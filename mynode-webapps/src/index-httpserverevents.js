//how to listen for server events

const http= require('http')

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

//server event listeners
server.on('request',(req,res)=>{
    console.log(req.headers)
    console.log(req.url,req.method)
    
})



server.listen(8080, () => {
    console.log(`Server is running on ${server.address().port}`)
})