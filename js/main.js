import prompt from "async-prompt";
import { imprimirArreglo } from "./module/imprimirArreglo.js";

let array = [];
let isRun = true;
let y = "";

while (isRun) {
    let x = (await prompt("Digite un caracter para imprimir: "));
    array.push(x);
    let aux = (await prompt("Desea agregar otro caracter? (S/N): "));
    if (aux == "N") {
        break;
    }
}

console.log(imprimirArreglo(array))