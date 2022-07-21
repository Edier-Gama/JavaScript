function greeting(){
    
    let userName = 'Ana'
    console.log(userName)

    if (userName === 'Ana'){
        console.log('Hola ' + userName)
    }
}

greeting()

// La variable userName NO se puede usar fuera de la función
// ya que su scope es solo dentro de la funcion