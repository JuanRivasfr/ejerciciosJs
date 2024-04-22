import prompt from "async-prompt";
import { sumarArreglo } from "./module/sumarArreglo.js";

let aux = []
let isRun = true

while (isRun) {
    
    let indice = Number(await prompt("Digite el numero: "))
    aux.push(indice)
    let con = await prompt("Desea ingresar otro valor? (S/N)")
    if (con === "N"){
        
        break;
    }

}

console.log(sumarArreglo(aux))