export const transcribir = (palabra) => {

    let aux = []

    for (const i in palabra.split("")) {
        
        if (palabra[i] === "C"){
            aux.push("G")
        }

        if (palabra[i] === "G"){
            aux.push("C")
        }

        if (palabra[i] === "T"){
            aux.push("A")
        }

        if (palabra[i] === "A"){
            aux.push("U")
        }

    }

    return aux.join("")

}