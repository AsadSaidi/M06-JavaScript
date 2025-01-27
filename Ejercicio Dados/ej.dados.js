let llistaNumeros = []
let sumaJugador1 = 0
let sumaJugador2 = 0

function numeroRandom(numeroMax, numeroMin){
    
    for(let i= 0; i < 4; i++){
        let numeroRandom = Math.trunc((Math.random() * (numeroMax - numeroMin) + numeroMin));

        llistaNumeros[i] = numeroRandom

        if(i < 2){
            sumaJugador1 += numeroRandom;
        }else{
            sumaJugador2 += numeroRandom;
        }
    }
    crearContenedores(llistaNumeros)
    quiGuanya(sumaJugador1, sumaJugador2)
}

function quiGuanya(sumaJugador1, sumaJugador2){
    const resultado = document.getElementById("resultado");

    if(sumaJugador1 > sumaJugador2){
        resultado.textContent = "Ha guanyat el Jugador 1";
    }else if(sumaJugador1 < sumaJugador2){
        resultado.textContent = "Ha guanyat el Jugador 2";
    }else{
        resultado.textContent = "Han empatat els dos jugadors";
    }
}

function crearContenedores(llistaNumeros){
    const contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = "";

    for(let i = 0; i < 4; i++){
        const dado = document.createElement("div");
        dado.classList.add("dado");
        dado.innerText = llistaNumeros[i]
        contenedor.appendChild(dado)
    }
}