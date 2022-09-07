//strings
var firstName = 'Subramanian'
let lastName = "Murugan"
//back tick : es 6 keyword ``

//let fullName =  firstName + lastName
let fullName = `${firstName} ${lastName}` // string interpolation

console.log("Name " + fullName)

console.log("Name " , fullName)
console.log(`Name ${fullName}`)
//multi line strings using es 5 pattern:
let title = 'IBM'
let doc = "<html>" +
    "<head>" +
    "<title>" + title + "</title>" +
    "</head>" +
    "<body>" +
    "<h1>Hello</h1>" +
    "</body>";
console.log(doc)

let docOne = `<html>
           <head>
            <title>${title}</title>
            </head>
          <body>
            <h1>Hello</h1>
          </body>
        `;
console.log(docOne)