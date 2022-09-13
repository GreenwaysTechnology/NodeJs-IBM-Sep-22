const net = require('net')
const client = net.connect({ port: 9090 }, () => {
    console.log('TCP client connected with Server')
});
client.on('data', data => {
    console.log(data.toString())
    client.end();
})
client.on('end', () => {
    console.log('Disconnected from the server')
})