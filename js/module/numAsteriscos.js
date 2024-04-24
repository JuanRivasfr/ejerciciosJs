export const numAsteriscos = (array) =>{

    let x = 0;
    for (let i = 0; i < array.length; i++) {

        for (let i2 = 0; i2 < array[i].length; i2++) {
            
            if (array[i][i2] == "*") {

                x += 1

            }
            
        }
        
    }

    return x

}

 
