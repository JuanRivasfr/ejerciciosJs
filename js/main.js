import prompt from "async-prompt";
import { likes } from "./module/likes.js";

let x = String(await prompt("Ingrese el valor: "));

console.log(likes(x));