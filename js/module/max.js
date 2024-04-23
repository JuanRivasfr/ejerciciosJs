export const max = (array) => {

    let aux = 0

    for (let i = 0; i < array.length; i++) {
        
        if(array[i] > aux){
            aux = array[i]
        }
        
    }

    return aux

}