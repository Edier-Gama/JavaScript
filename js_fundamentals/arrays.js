// Los arrays son estructuras de datos que van a guardar ciertos datos dentro.

let frutas = ['manzana','pera','piña','coco','mora','limon','fresa']

// Métodos de los arrays

// Para saber cuantos elementos hay dentro de un array hay que usar .length

frutas.length // 7

// Para ingresar a un elemento exacto usamos []

frutas[0] // manzana
frutas[1] // pera
// etc ...

//Para añadir mas elementos al final de un array se usa .push()

frutas.push('cereza')

//Para eliminar el último elemento en un array, se usa .pop()

frutas.pop('fresa')

// Para agregar un nuevo elemento al inicio del array se usa .unshift()

frutas.unshift('banano')

// Para eliminar el elemento inicial de un array se usa .shift()

frutas.shift()

// Para saber la pocision de un elemento se usa .indexOf()

frutas.indexOf('pera') //1