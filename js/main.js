import prompt from "async-prompt";
import { numeroDeAes } from "./module/numeroDeAes.js";

let palabra = String(await prompt("Ingrese la palabra: ")).toUpperCase();

console.log(numeroDeAes(palabra));