
// export  default class CustomerService {

// }

class CustomerService {
    constructor() {
        console.log('CustomerService')
    }
    list() {
        return [{
            id: 1,
            name: 'A'
        }]
    }
}

export default CustomerService;