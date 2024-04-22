import prompt from "async-prompt";
import { contarRango } from "./module/contarRango.js";

let num1 = Number(await prompt("Ingrese el numero inicial del rango: "))
let num2 = Number(await prompt("Ingrese el numero final del rango: "))

console.log(contarRango(num1, num2))