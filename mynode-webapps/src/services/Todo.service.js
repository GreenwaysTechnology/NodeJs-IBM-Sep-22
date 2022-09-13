const todos = require("../mock-data/todos")

class TodoService {
    constructor() {

    }
    //blocking api
    // findAll() {
    //     return JSON.stringify(todos)
    // }
    // findAll(callback) {
    //     setTimeout(callback, 5000, todos)
    // }
    findAll() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 5000, todos)
        })
    }
}
module.exports = new TodoService();