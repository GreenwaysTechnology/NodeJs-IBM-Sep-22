//object creation
//Constructor pattern
//functions -  es 5 style
//class -es 6 style
//literal Pattern

//function  - es 5
function Employee(id = 0, name = '') {
    //state
    this.id = id
    this.name = name
    //behaviour
    this.calculate = function () {
        return 100
    }
}
//object creation
//emp is variable
//new is keyword
//Employee() - constructor call 
let emp = new Employee(23, 'Ram')
console.log(emp.id, emp.name, emp.calculate())
emp = new Employee()
console.log(emp.id, emp.name, emp.calculate())

