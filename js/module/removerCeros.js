export const removerCeros = (array) =>{

    let aux = []

    for (let i in array){

        if (array[i] !== 0){
            
            aux.push(array[i])

        }

    }

    return aux

}