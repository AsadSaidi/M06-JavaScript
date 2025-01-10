//Escribe un programa que imprima en consola todos los números pares marcados en el rango que indique el usuario.

function sumaNumeros(){
    var num1 = prompt("Introdueix el primer numero")
    var num2 = 0
    do{
        num2 = prompt("Introdueix un segon numero")
        if(num1 > num2) console.log("ERROR: El segon numero no pot ser mes petit que el primer");
    }while(num1 > num2)
    
    let Resultat = 0

    for(let i = num1; i <= num2; i++){
        if(i % 2 == 0){
            Resultat += i
        }
    }
    console.log(Resultat)
}