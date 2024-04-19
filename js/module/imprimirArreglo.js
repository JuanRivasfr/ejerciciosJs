export const imprimirArreglo = (arreglo) => {

    let aux = "";

    for (let i = 0; i < arreglo.length; i++) {
        aux += arreglo[i] + "\n";
    }

    return aux;
} 