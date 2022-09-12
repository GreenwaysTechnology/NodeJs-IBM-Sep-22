const login = (userName, password) => {
    if (userName === 'admin' && password === 'admin') {
        return Promise.resolve('Login success')
    } else {
        return Promise.reject('Login failed')
    }
}
login('admin', 'admin')
    .then(res => console.log(res), err => console.log(err))
    .finally(() => {
        console.log('finally')
    })
login('wee', 'admin')
    .then(res => console.log(res), err => console.log(err))
    .finally(() => {
        console.log('finally')
    })