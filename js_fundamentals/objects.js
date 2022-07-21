// Un objeto es un sitio donde se guardan las propiedades y metodos de algo
// esto tiene que ver con POO, tema del que no voy a profundizar xd


let user = {
 
    name: 'Edier',
    age: 17,
    date: 131204,
    identification: 1032938242,

    // Los objetos también tienen métodos,es decir cosas que pueden realizar.
    // En el caso de un usuario su metodo principal es registrarse o log in

    iniciarSesion: function(){
      console.log('Has iniciado tu sesión')
    }

}

// Para acceder a un elemento en concreto del objeto se usa:

// nombre_del_objeto.propiedad

user.name // 'Edier'

// Metodo constructor para crear clases y generar instancias.

// Digamos que queremos crear muchos mas usuarios, como le hariamos?


function usuario (nombre, edad, date, id){
  this.nombre = nombre
  this.edad = edad 
  this.date = date
  this.id = id
}

newUser = usuario('Edier', '20', 131204, 1032938242 )