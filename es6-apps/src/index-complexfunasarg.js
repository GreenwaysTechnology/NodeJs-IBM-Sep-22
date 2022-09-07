//Higher order function parameters and args
//a=function(){
//     console.log('my fun')
// }
function connect(a) {
    //
    // console.log(a)
    a()
}

///
connect(function(){
    console.log('my fun')
})
//more args 
function login(resolve, reject) {
    if (typeof resolve && typeof reject === 'function') {
        let isLoggedIn = true
        if (isLoggedIn) {
            resolve('login Success')
        } else {
            reject('login failed')
        }
    } else {
        console.log('Passs only function')
    }

}
login(function (status) {
    console.log(status)
}, function (err) {
    console.log(err)
})

login('adfadf', 11112)