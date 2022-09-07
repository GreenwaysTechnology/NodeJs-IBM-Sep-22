//Higher order function .
//How to pass function as parameter to another function. 
//How to return function from another function .

//Function as parameter.
function add(a, b) {
    console.log(a, b)
    return a + b
}



console.log(add(10, 10))//hard coded values
let x = 10;
let y = 20;
console.log(add(x, y))//hard coded values


//myvar = function(){}
function readContent(myvar) {
    myvar()
}
//readContent(10)
//readContent('hello')
let myfun = function () {
    console.log('myfun')
}
readContent(myfun)

readContent(function () {
    console.log('myfun 2')
})
