export const numeroDeCaracteres = (palabra, letra) => {

let cont = 0;

    for (let aux of palabra) {

        if (aux === letra)[
            cont += 1
        ]
        
    }

    return ("La letra " + letra+ " esta " +cont+ " veces en la palabra")

}