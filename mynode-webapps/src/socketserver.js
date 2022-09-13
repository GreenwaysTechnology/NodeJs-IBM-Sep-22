const net = require('net')

//socket tcp server 
const server = net.createServer(connection => {
    console.log('TCP server is connected')
    //events
    connection.on('end', () => {
        console.log('client is disconnected')
    })
    connection.write('Hello,TCP Server Message')
    connection.pipe(connection)
})
//server listener
server.listen(9090, () => {
    console.log('TCP server is listening')
})