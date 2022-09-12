//callback chaining.

const getUser = () => {
    return new Promise((resolve, reject) => {
        let user = {
            id: 1,
            name: 'Subramanian'
        }
        //user=null
        if (user) {
            setTimeout(resolve, 100, user)
        } else {
            setTimeout(reject, 100, { err: 'User not found' })
        }
    })
}

const login = user => {
    return new Promise((resolve, reject) => {
        if (user.name === 'Subramanian') {
            setTimeout(resolve, 100, 'Login success')
        } else {
            setTimeout(reject, 100, 'login failed')
        }
    })
}
const showDashBoard = (status, resolve, reject) => {
    return new Promise((resolve, reject) => {
        if (status === 'Login success') {
            setTimeout(resolve, 100, 'Admin')
        } else {
            setTimeout(reject, 100, 'Guest')
        }
    })
}
// getUser(user => {
//     console.log(user)
//     login(user, status => {
//         console.log(status)
//         showDashBoard(status, page => console.log(page), err => {
//             console.log(err)
//         })
//     }, err => {
//         console.log(err)
//     })
// }, err => {
//     console.log(err)
// })

getUser()
    .then(user => {
        console.log('get user is called')
        return login(user)
    })
    .then(status => {
        console.log('status is called')
        return showDashBoard(status)
    })
    .then(page => {
        console.log('page is called')
        console.log(page)
    })
    .catch(err => {
        console.log(err)
    })

