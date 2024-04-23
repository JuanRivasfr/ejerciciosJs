export const sumarArreglo = (array, rangoInicial, rangoFinal) =>{

    let cont = 0

    for (const i in array) {
        
        if (i >= rangoInicial && i <= rangoFinal){

            cont += array[i]

        }

    }

    return cont

}