export const min = (array) => {

    let x = array[0]
    
    for (let i = 0; i < array.length; i++) {

        if (array[i] < x){

            x = array[i]

        }
        
    }

    return x

}