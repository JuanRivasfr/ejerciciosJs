import prompt from "async-prompt";
import { imprimirArreglo } from "./module/imprimirArreglo.js";

let array = [];
let isRun = true;

while (isRun) {
    let x = (await prompt("Digite un caracter para imprimir: "));
    let y = "";
    y += x;
    let aux = (await prompt("Desea agregar otro caracter? (S/N): "));
    if (aux == "N") {
        array.push(y);
        break;
    }
}

console.log(imprimirArreglo(array))