//Non blocking implementations using callbacks

//hello is variable, can hold any value

function blockMe(message){
    console.log(message)
}

function sayHello(hello) {
  // hello()
  //you register listener function with high level api called setTimeout
  setTimeout(hello,5000)
}
blockMe('start')
sayHello(function(){
    console.log('hello')
})
blockMe('end')
