//multiple callbacks

// function login(userName, password, success, failure) {
//     if (userName === 'admin' && password === 'admin') {
//         setTimeout(success, 1000, 'Login success')
//     } else {
//         setTimeout(failure, 1000, 'Login failed')
//     }
// }
const login = (userName, password, success, failure) => {
    if (userName === 'admin' && password === 'admin') {
        setTimeout(success, 1000, 'Login success')
    } else {
        setTimeout(failure, 1000, 'Login failed')
    }
}
// login('admin', 'admin', function (status) {
//     console.log(status)
// }, function (err) {
//     console.log(err)
// })
// login('foo', 'admin', function (status) {
//     console.log(status)
// }, function (err) {
//     console.log(err)
// })

login('admin', 'admin', status => console.log(status), (err) => console.log(err))
login('foo', 'admin', status => console.log(status), (err) => console.log(err))
