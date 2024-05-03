import { getAllOficceCityAndMovil, getAllOficceCodeCity } from "./module/offices.js";
import { getAllFullNameAndEmail,getNameLastnameEmailBoss, getNameLastnamePosition } from "./module/employees.js";
import { getAll, getAllCodePay2008, getAllPayForms, getAllClientWithPaymentsAndManager } from "./module/payments.js";
import { 
    getAllSpainClients, getAllMadridClientesWithCodeManagerEquals11Or30, getAllClientsAndManager,
    getAllClientsWithNoPayments
} from "./module/clients.js";
import { getStatus, getAllOrderCodeClientCodeDateWaitDateRequest, getRequestCodeClientCodeDateAwaitDateDelivery2, getRejectedRequestAt2009,  getAllRequestMadeInJanuary} from "./module/requests.js";
import { getAllProductsGamaEqualsOrnamentales } from "./module/product.js";
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
//14. console.log(await getAllPayForms())
//15. console.log(await getAllProductsGamaEqualsOrnamentales())
//16. console.log(await getAllMadridClientesWithCodeManagerEquals11Or30())

//Multitabla

//1. console.log(await getAllClientsAndManager())
//2. console.log(await getAllClientWithPaymentsAndManager())
console.log(await getAllClientsWithNoPayments())


