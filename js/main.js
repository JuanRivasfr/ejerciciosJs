import { getAllOficceCityAndMovil, getAllOficceCodeCity } from "./module/offices.js";
import { getAllFullNameAndEmail,getNameLastnameEmailBoss, getNameLastnamePosition } from "./module/employees.js";
import { getAll, getAllCodePay2008 } from "./module/payments.js";
import { getAllSpainClients } from "./module/clients.js";
import { getStatus } from "./module/requests.js";
//1. console.log(await getAllOficceCodeCity());
//2. console.log(await getAllOficceCityAndMovil());
//3. console.log(await getAllFullNameAndEmail());
//4. console.log(await getNameLastnameEmailBoss());
//5. console.log(await getNameLastnamePosition());
//6. console.log(await getAllSpainClients());
//7. console.log(await getStatus());
console.log(await getAllCodePay2008());
