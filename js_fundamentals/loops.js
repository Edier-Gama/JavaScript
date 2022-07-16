// Un loop es una estructura repetitiva que nos sirven para hacer
// bucles con una estructura de datos. Repetir una misma tarea hasta
// que esta sea verdadera

//BUCLE FOR:



estudiantes = ['Maria', 'Petro', 'Edier']

function saludarEstudiante(estudiante){
    console.log('Hola ' + estudiante)
}

for(i of estudiantes){
    saludarEstudiante(estudiantes[i])
}
// Recorrimos con una for una lista de estudiantes y POR CADA ESTUDIANTE en la
// lista, se ejecutaba la función




// BUCLE WHILE: MIENTRAS QUE



estudiantes = ['Maria', 'Petro', 'Edier']

function saludarEstudiante(estudiante){
    console.log('Hola ' + estudiante)
}

while(estudiantes.length > 0){
    let estudiante = estudiantes.shift()
    saludarEstudiante(estudiante)
}