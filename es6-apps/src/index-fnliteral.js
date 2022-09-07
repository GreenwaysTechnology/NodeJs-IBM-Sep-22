//function literal

//in js function itself value., since it is value we can assign into variable, we can pass as parameter to another function,can return from another function .

//how to assign a function to the variable - anonmous functions 
//that variable can be used to invoke that function .

let hai = function () {
    console.log('Hai')
}
hai()
//parameters and args 
let add = function (a = 0, b = 0) {
    return a + b
}
console.log(add(10,10))


