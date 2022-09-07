//object creation
//Constructor pattern
//functions -  es 5 style
//class -es 6 style
//literal Pattern

//function  - es 6
class Employee {
    //state
    constructor(id = 0, name = '') {
        this.id = id
        this.name = name
    }
    //behaviour
    calculate() {
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

