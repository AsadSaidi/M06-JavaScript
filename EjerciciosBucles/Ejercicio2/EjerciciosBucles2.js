//Pide al usuario un número N y calcula la suma de todos los números del 1 al N. Muestra el resultado en la consola.

function sumaNumeros(){
    var num1 = prompt("Introdueix un numero")
    let Resultat = 0
    for(let i = 1; i <= num1; i++){
        Resultat = Resultat + i
    }
    console.log(Resultat)
}