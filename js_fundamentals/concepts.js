// Coercion es el proceso en que una variable cambia su tipo a 
// tipo de variable. Por ejemplo en Java esto es el cast

// Hay dos tipos de coerción.

// COERCION EXPLICITA:

let varibale = 1000
let varibale_en_string = String(varibale)

// EJEMPLO #2

let num = 45
let mul = num * "5"

// El resultado de esto es una multiplicacion ya que el lenguaje interpreta
// que estamos intentando multiplicar por 5

// En este momento, variable_en_string es igual a "1000", lo mismo
// pero en string, cuando lo hacemos nosotros se dice que es explicita


// COERCION IMPLICITA:

let numero = 34
let suma = numero + "66"

// Aquí el resultado será 3466 ya que al sumarse el lenguaje suma las dos
// varibles en un solo string

