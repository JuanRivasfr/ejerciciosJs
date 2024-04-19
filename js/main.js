import prompt from "async-prompt";
import { calcularImpuestos } from "./module/calcularImpuestos.js";

let edad = Number(await prompt("Ingrese la edad: "));
let ingresos = Number(await prompt("Digite los ingresos: "));

console.log(calcularImpuestos(edad, ingresos));