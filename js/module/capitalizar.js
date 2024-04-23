export const capitalizar = (palabra) => {

    let arrayaux = palabra.split(" ")
    let aux = []

    for (let i = 0; i < arrayaux.length; i++) {
    
        let x = arrayaux[i].charAt(0).toUpperCase();
        let y = arrayaux[i].slice(1);

        aux.push(x+y)
        
    }

    return aux.join(" ")

}