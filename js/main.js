import prompt from "async-prompt";
import { numeroDeCaracteres } from "./module/numeroDeCaracteres.js";

let palabra = String(await prompt("Digite la palabra: "));
let letra = String(await prompt("Digite la letra: "))

console.log(numeroDeCaracteres(palabra, letra))