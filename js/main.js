import prompt from "async-prompt";
import { multiplicarArreglo } from "./module/multiplicarArreglo.js";

let array = []
let isRun = true

while (isRun){

    let indice = Number(await prompt("Ingrese el numero: "))
    array.push(indice)
    let x = await prompt("Desea agregar otro numero? (S/N): " )
    if (x === "N"){
        break
    }

}

console.log(multiplicarArreglo(array))