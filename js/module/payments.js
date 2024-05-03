import { getClientsByClient_Code } from "./clients.js"
import { getEmployeesByCode } from "./employees.js"

//8. Devuelve un listado con el código de cliente de aquellos 
// clientes que realizaron algún pago en 2008. Tenga en cuenta que 
// deberá eliminar aquellos códigos de cliente que aparezcan repetidos.
// Resuelva la consulta:
// Utilizando la función YEAR de MySQL.
// Utilizando la función DATE_FORMAT de MySQL.
// Sin utilizar ninguna de las funciones anteriores.

export const getAllCodePay2008 = async() => {

    let res = await fetch("http://localhost:5505/payments")
    let data = await res.json()
    let dataUpdate = []
    let uniqueClients = new Set();
    data.forEach(val => {
        let [year] = val.date_payment.split("-")
        if (year === "2008" && !uniqueClients.has(val.code_client)) {
            dataUpdate.push(val);
            uniqueClients.add(val.code_client);
        }
    })
    let dataPrint = dataUpdate.map(val => {
        return{
            code_client: val.code_client
        }
    })
    return dataPrint
}

//13. Devuelve un listado de todos los pagos realizados en el año por PAypal
//en el año 2008 organicelos d emayor a menor

export const getAll = async() => {

    let res = await fetch("http://localhost:5505/payments")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        
        let { date_payment } = val
        let [year] = date_payment.split("-")
        if(year == "2008"){
            dataUpdate.push(val)
        }
    });

    dataUpdate.sort((a, b) => {

        let [, monthA] = a.date_payment.split("-")
        let [, monthB] = b.date_payment.split("-")

        return monthB - monthA

    })
    
    return dataUpdate;


}

//14. Devuelve un listado con todas las formas de pago que aparecen en la tabla pago. 
//Tenga en cuenta que no deben aparecer formas de pago repetidas.

export const getAllPayForms = async() => {

    let res = await fetch("http://localhost:5505/payments")
    let data = await res.json()
    let dataUpdate = new Set()

    data.forEach(val => {

        if(!dataUpdate.has(val.payment)){
            dataUpdate.add(val.payment)
        }

    })

    return Array.from(dataUpdate)

}

//Multitabla

export const getPaymentsByCode_client = async(code) => {

    let res = await fetch(`http://localhost:5505/payments?code_client=${code}`)
    let data = await res.json()

    return data
}

//2.Muestra el nombre de los clientes que hayan realizado pagos junto con el nombre de sus representantes de ventas.

export const getAllClientWithPaymentsAndManager = async() => {

    let res = await fetch("http://localhost:5505/payments")
    let payments = await res.json()

    for (let i = 0; i < payments.length; i++) {
        
        let {payment,
            date_payment,
            total,
            id,
        ...UpdatePayment} = payments[i]
        let [cliente] = await getClientsByClient_Code(payments[i].code_client)
        let {client_code,
            city,
            contact_name,
            contact_lastname,
            phone,
            fax,
            address1,
            address2,
            region,
            country,
            postal_code,
            limit_credit,
            id: idCliente,
        ...updateCliente} = cliente
        let [empleado] = await getEmployeesByCode(cliente.code_employee_sales_manager)
        let{employee_code,
            extension,
            email,
            code_office,
            code_boss,
            position,
            id: idEmpleado,
        ...updateEmpleado} = empleado
        payments[i].code_client = cliente

        let data = {...UpdatePayment, ...updateCliente, ...updateEmpleado}
        
        payments[i] = {
            client_name : data.client_name,
            id_transaction : data.id_transaction,
            manager_name : `${data.name} ${data.lastname1} ${data.lastname2}`

        }
    }

    return payments
    
}

