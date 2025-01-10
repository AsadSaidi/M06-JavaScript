//Escribe un programa que dibuje un triángulo en la consola. (línea 1, 1*, línea 2, *).

function trianguloConsola() {
    const asterixo = "*"
    const espaiBlanc = " "
    const base = 11

    console.log(espaiBlanc.repeat(base/2) + "+" )


    for (let i = 3; i <= base; i += 2) {
        const espacios = (base - i) / 2; 
        console.log(espaiBlanc.repeat(espacios) + asterixo.repeat(i));
    }

    const espaciosFinal = (base - 2) / 2; 
    console.log(espaiBlanc.repeat(espaciosFinal) + "||")
}
