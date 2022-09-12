const todoservice = require('./services/TodoService')

async function main() {
    // const todos = todoservice.list()
    // console.log(todos)
    //todoservice.list(todos => console.log(todos))
    //todoservice.list().then(todos=>console.log(todos))
    try {
        const todos = await todoservice.list()
        console.log(todos)
    }
    catch (err) {
        console.log(err)
    }
}
main()