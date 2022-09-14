const http =require('http')

const server=http.createServer((req,res)=>{
    res.end('Hello,Npm')
})

server.listen(8080,()=>{
    console.log(server.address())
})