import prompt from "async-prompt";
import { fizzBuzz } from "./module/fizzBuzz.js";

let aux = Number(await prompt("Ingrese el numero: "))

console.log(fizzBuzz(aux))