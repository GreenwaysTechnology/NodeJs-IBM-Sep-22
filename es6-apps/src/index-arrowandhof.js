//higher order function and arrow.

let connect = callback => callback()

connect(() => console.log('connecting...'))

const login = (resolve, reject) => {
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
login(status => console.log(status), (err) => console.log(err))
