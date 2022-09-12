//callback chaining.

const getUser = (resolve, reject) => {
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
}

const login = (user, resolve, reject) => {
    if (user.name === 'Subramanian') {
        setTimeout(resolve, 100, 'Login success')
    } else {
        setTimeout(reject, 100, 'login failed')
    }
}
const showDashBoard = (status, resolve, reject) => {
    if (status === 'Login success') {
        setTimeout(resolve, 100, 'Admin')
    } else {
        setTimeout(reject, 100, 'Guest')
    }
}
getUser(user => {
    console.log(user)
    login(user, status => {
        console.log(status)
        showDashBoard(status, page => console.log(page), err => {
            console.log(err)
        })
    }, err => {
        console.log(err)
    })
}, err => {
    console.log(err)
})

