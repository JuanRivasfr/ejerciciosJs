export const numeroDeAes = (palabra) => {

    let cont = 0;

    for (let letra of palabra) {
        
        if (letra === "A"){
            cont += 1
        }
        
    }

    return ("En la palabra se encontraron " + cont + " 'A'")

}