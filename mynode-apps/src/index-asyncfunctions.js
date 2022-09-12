//
async function getValue() {
    return 10 //Promise.resolve(10)
}
const res = getValue()
//console.log(res)
res.then(res => console.log(res))

async function getStock() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 1000, 'hello')
    })
}
getStock().then(res=>console.log(res))