//event emitter
const EventEmitter = require('events')


class CustomerService extends EventEmitter {
    constructor() {
        super()
        //listener registeration
        //sales is event , 2nd parameter is listener
        this.on('sales', (event) => {
            console.log(event)
        })
    }
    buy(product) {
        this.emit('sales', product)
    }
}
let customerService = new CustomerService()
customerService.buy({ id: 1, name: 'Phone', qty: 100, price: 1000.89 })