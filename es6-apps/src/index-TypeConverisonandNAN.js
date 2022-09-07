let x = "10";
let y = 10;
let c = x * y;
console.log(`C ${c}`)

//explicit
let d = parseFloat(x) * y;
console.log(`D ${d}`)

x = "$20";
c = x * y;
console.log(`C ${c}`)

d = parseFloat(x) * y;
console.log(`D ${d}`)