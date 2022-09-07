//basic functions
/**
 * 1.regular functions 
 * 2.function literals
 */

//regular function 
function sayHello() {
    console.log('Hello')
}
sayHello()
//function with logic 
function auth() {
    let userName = 'admin'
    let password = 'admin'
    if (userName === 'admin' && password === 'admin') {
        console.log('Login  Success')
    } else {
        console.log('Login failed')
    }
}
auth()
//function args and parameters
//es 6 default args 
function add(a = 0, b = 0) {
    console.log(`a ${a} b ${b}`)
    let c = a + b
    console.log(`The result is ${c}`)
}
//parameters
add(10, 10)
add()
//how to return value 
function mulitply(a = 0, b = 0) {
    return a * b
}
console.log(mulitply(10,10))
console.log(mulitply())