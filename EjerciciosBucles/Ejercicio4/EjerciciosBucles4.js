//Escribe un programa que dibuje un triángulo en la consola. (línea 1, 1*, línea 2, *).

function trianguloConsola() {
    const asterisco = "*"

    for (let i = 1; i <= 5; i++) {
        console.log(asterisco.repeat(i));
    }
}
