import { getAllOficceCityAndMovil, getAllOficceCodeCity } from "./module/offices.js";
import { getAllFullNameAndEmail,getNameLastnameEmailBoss, getNameLastnamePosition } from "./module/employees.js";
import { getAll, getAllCodePay2008, getAllPayForms } from "./module/payments.js";
import { getAllSpainClients } from "./module/clients.js";
import { getStatus, getAllOrderCodeClientCodeDateWaitDateRequest, getRequestCodeClientCodeDateAwaitDateDelivery2, getRejectedRequestAt2009,  getAllRequestMadeInJanuary} from "./module/requests.js";
//1. console.log(await getAllOficceCodeCity());
//2. console.log(await getAllOficceCityAndMovil());
//3. console.log(await getAllFullNameAndEmail());
//4. console.log(await getNameLastnameEmailBoss());
//5. console.log(await getNameLastnamePosition());
//6. console.log(await getAllSpainClients());
//7. console.log(await getStatus());
//8. console.log(await getAllCodePay2008());
//9. console.log(await getAllOrderCodeClientCodeDateWaitDateRequest());
//10.console.log(await getRequestCodeClientCodeDateAwaitDateDelivery2());
//11. console.log(await getRejectedRequestAt2009());
//12. console.log(await getAllRequestMadeInJanuary())
//13. console.log(await getAll())
console.log(await getAllPayForms())
