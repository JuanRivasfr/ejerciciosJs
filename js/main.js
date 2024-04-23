import prompt from "async-prompt";
import { removerCeros } from "./module/removerCeros.js";

let array = []
let isRun = true

while(isRun){

    let x = Number(await prompt("Ingrese el numero: "));
    array.push(x)
    let op = await prompt("Desea ingresar otro numero? (S/N) ");

    if (op === "N"){
        break
    }

}

console.log(removerCeros(array))