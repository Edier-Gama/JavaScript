//varibales

var a; // declarando
var b = 'b' // asignación
b = 'bb' // reasignación
var a = 'aa' // redeclaración


// Global scope

var fruit = 'Apple' // global

function bestFruit(){
    console.log(fruit)
}

bestFruit()


function countries(){
    country = 'Colombia' // 
    console.log(country)
}

countries()
console.log(country) // Country está en el scope global ya que solo 
                     // ha sido asignado sin let, var o const