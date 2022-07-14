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