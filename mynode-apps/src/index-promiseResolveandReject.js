const login = (userName, password) => {
    if (userName === 'admin' && password === 'admin') {
        return Promise.resolve('Login success')
    } else {
        return Promise.reject('Login failed')
    }
}
login('admin', 'admin')
    .then(res => console.log(res))
    .catch(err => console.log(err))
login('foo', 'admin')
    .then(res => console.log(res))
    .catch(err => console.log(err))
