export const imprimirMatriz = (array) =>{

    let aux = []

    for (let i = 0; i < array.length; i++) {
        
        for (let i2 = 0; i2 < array[i].length; i2++) {
            
            aux.push(array[i][i2])
            
        }

    }

    return aux

}