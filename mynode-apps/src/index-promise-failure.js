//how to create Promise Object using factory

function blockMe(message){
    console.log(message)
}
function getInfo() {
    return Promise.reject('failure') // factory api to create Promise Instance
}
blockMe('start')
getInfo()
    .catch(err=>console.log(err))
blockMe('end')