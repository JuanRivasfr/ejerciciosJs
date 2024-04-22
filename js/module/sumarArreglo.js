export const sumarArreglo = (aux) => {

    let cont = 0

    for (const i  in aux) {
    
        cont += Number(aux[i])
    
    }

    return cont

}