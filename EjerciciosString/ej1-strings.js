function buscadoAS(){
    let palabra = prompt("Introduce una palabra")
    let as = "As"
    let empiezaPorAs = palabra.startsWith(as)
    let resultado = ""

    if(empiezaPorAs){
        resultado = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    }else{
        resultado = "As" + palabra.toLowerCase()
    }

    console.log(resultado)
}

