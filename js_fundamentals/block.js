// El scope de bloque es el alcance que tienen las variables cuando
// están dentro de un bloque, usualmente para eso se creo la palabra let y const

function fruits(){

    if(true){
        var fruit1 = 'Apple' // function scope
        let fruit2 = 'Kiwi' // Block scope
        const fruit3 = 'Banana' // Block scope
    }

    console.log(fruit1)
    console.log(fruit2) // Inalcnazable
    console.log(fruit3) // Inalcanzable

}

fruits()