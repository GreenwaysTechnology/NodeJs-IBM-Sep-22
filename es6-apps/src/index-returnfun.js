//how to return function from another function 

function counter() {
    //inner function 
    return function(){
         return 10;
    }
}
let inc = counter()
console.log(inc())

console.log(counter()())