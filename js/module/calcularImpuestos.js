export const calcularImpuestos = (edad, ingresos) => {

    if ((edad >= 18) && (ingresos >= 1000)){
        return ("El valor a pagar es: "+ingresos*0.4)
    } 
    else {
        return ("El valos a pagar es: "+0)
    }

}