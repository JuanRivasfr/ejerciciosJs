export const multiplicarArreglo = (array) =>{

    let cont = 1

    for (const i in array){

        cont *= array[i]

    }

    return cont

}