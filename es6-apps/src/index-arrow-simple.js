//function literals in es 6 is written using syntax called "Arrow functions"

let add = function (a = 0, b = 0) {
    console.log('add function')
}
add(1, 2)
//arrow syntax
add = (a = 0, b = 0) => {
    console.log('add function')
}
add(1, 2)
//flavours of arrow functions 
//if function has only one line of code then remove {}
add = (a = 0, b = 0) => console.log('add function')
add(1, 2)
add = (a = 0, b = 0) => {
    return a + b
}
console.log(add(1, 2))
//what if function only return ,we can remove { } and return statement
add = (a = 0, b = 0) => a + b
console.log(add(1, 2))

let getValue = (value) => {
    return value
}
console.log(getValue(10))
//what if function has single arg without default value and return the same ,remove {}(),return statement

getValue = value => value
console.log(getValue(10))