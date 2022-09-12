const fs = require('fs')
const filePath = './src/assets/info.txt';

const options = {
    encoding: 'UTF-8'
}
function blockMe(message){
    console.log(message)
}

blockMe('start')
fs.readFile(filePath, options, (err, data) => {
    if (err) throw err
    console.log(data)
})
blockMe('end')