import prompt from "async-prompt";
import { bmi } from "./module/bmi.js";

let peso = Number(await prompt("Ingrese el peso: "));
let altura = Number(await prompt("Ingrese la altura: "));

console.log(bmi(peso, altura));