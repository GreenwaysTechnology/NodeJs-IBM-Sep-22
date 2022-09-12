const TODOS = require('../mock-todos/todos')

class TodoService {
    constructor() {
    }
    //sync api
    // list() {
    //     return TODOS
    // }
    //async api
    // list(callback){
    //   setTimeout(callback,100,TODOS)
    // }
    list() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 100, TODOS)
        })
    }
}
module.exports = new TodoService();