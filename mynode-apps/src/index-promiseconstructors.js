
function blockMe(message) {
    console.log(message)
}
function getInfo() {
    return new Promise((resolve, reject) => {
        let status = false
        if (status) {
            setTimeout(resolve, 500, 'Success')
        } else {
            setTimeout(reject, 500, 'Failure')
        }
    });
}
blockMe('start')
getInfo()
    .then(res => console.log(res))
    .catch(err=>console.log(err))
blockMe('end')