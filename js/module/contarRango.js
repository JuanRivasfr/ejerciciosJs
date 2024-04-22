export const contarRango = (numero1, numero2) =>{

    let aux = 0

    for (let i = numero1; i < numero2-1; i++) {
        aux += 1
    }

    return ("El rango entre los numeros es: " + aux)

}