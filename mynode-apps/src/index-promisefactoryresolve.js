//how to create Promise Object using factory

function blockMe(message){
    console.log(message)
}
function getInfo() {
    return Promise.resolve('success') // factory api to create Promise Instance
}
blockMe('start')
getInfo()
    .then(res => console.log(res))
blockMe('end')