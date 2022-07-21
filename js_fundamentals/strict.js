// El modo estrícto quita el hoisting de nuestro código, cuando ejecutamos
// el codigo en modo estricto, no podemos solo declarar la variable, hay que 
// inicializarla con las palabras let o const

'use strict'
pi = 3.1416
console.log(pi)

// Error

function MyFunction(){
    'use strict'
    return pi = 3.1416
}
console.log(MyFunction())

// Error