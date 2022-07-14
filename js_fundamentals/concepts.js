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



// VALORES QUE SON TRUTHY Y FALSY

//Ejemplos en los que Boolean devuelve Falso:

Boolean() // False
Boolean(false) // False
Boolean(0) // False
Boolean(null); //false
Boolean(NaN); //false
Boolean(undefined); //false
Boolean(""); //false

//Ejemplos en los que Boolean devuelve verdadero:


Boolean(1); //true para 1 o cualquier número diferente de cero (0)
Boolean("a"); //true para cualquier caracter o espacio en blanco en el string
Boolean([]); //true aunque el array esté vacío
Boolean({}); //true aunque el objeto esté vacío
Boolean(function(){}); //Cualquier función es verdadera también esté vacia




// OPERADORES ARITMÉTICOS:

!False // Esto devuelve True ya que el ! es como un NOT. Hace lo contrario

suma = 1 + 1
resta = 20 - 1
multiplicacion = 45 * 35
division = 34 / 2



// OPERADORES DE ASIGNACIÓN

let saludo = "HOLA"

// OPERADORES DE COMPARACIÓN

let a = "24"
let b = 24

a == b // Esto devuelve True ya que a pesar de que a sea string, 
       //en si el numero es igual

a === b // Esto devuelve false ya que aqui el dato si debe ser
        // estrictamente el mismo


5 > 6 // Mayor que
6 < 5 // Menor que
5 >= 7 // Mayor o igual a
5 <= 6 // Menor o igual a

// Tablas de verdad:

b && c //.... // si b Y c son verdad se cumple
b || c //.... // si b O c es verdadero si se cumple

// OPERADORES PARA VARIABLES

let ejemplo = 90
ejemplo++ // Esto devuelve 91, es como decir ejemplo + 1

ejemplo += 5 // Esto devuelve 95, es como decir ejemplo = ejemplo + 5



//Funcion declarativa

//En las funciones declarativas, la funcion va normal

function MiFuncion(){
    return console.log("Hola")
}

//Funcion expresiva o anónima

//En las funciones expresivas, la función va dentro de una variable


let funcion_1 = function(){
    console.log()
}

//Los parametros igual que en python son los datos que le pasaremos
//a la funcion para que esta los remplace en el proceso

estudiante = prompt("¿Cúal es tu nombre?")

function saludarEstudiante(estudiante){
    alert("Hola, querido " + estudiante + " Espero que te guste mi canal")
}

saludarEstudiante(estudiante)


// CONDICIONALES:

edad = 90 

if (edad > 90) {
    document.write('Tienes mas de 90')
}else{
    document.write('Tienes menos de 90')
}

// En una sola linea

edad > 90 ? document.write('Tienes mas de 90'): document.write('Tienes menos de 90')