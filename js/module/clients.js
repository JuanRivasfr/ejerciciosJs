import { getEmployeesByCode } from "./employees.js"
import { getPaymentsByCode_client } from "./payments.js"

//6. Devuelve un listado con el nombre de los todos los clientes españoles.

export const getAllSpainClients = async() => {

    let res = await fetch("http://localhost:5501/clients")
    let data = await res.json()
    let dataUpdate = data.filter(val => val.country === "Spain")

    let dataPrint = dataUpdate.map(val => ({

        name: val.client_name,
        
    }))

    return dataPrint


}

//16. Devuelve un listado con todos los clientes que sean de la ciudad de Madrid y 
//cuyo representante de ventas tenga el código de empleado 11 o 30.

export const getAllMadridClientesWithCodeManagerEquals11Or30 = async() => {

    let res = await fetch("http://localhost:5501/clients")
    let data = await res.json()
    let dataUpdate = []

    data.forEach(val => {

        if (val.city === "Madrid" && (val.code_employee_sales_manager === 11 || val.code_employee_sales_manager === 30)){
            dataUpdate.push(val)
        }

    })
    
    return dataUpdate


}

//Consultas multitabla

export const getClientsByClient_Code = async(code) => {

    let res = await fetch(`http://localhost:5501/clients?client_code=${code}`)
    let data = await res.json()

    return data
}

//1.Obtén un listado con el nombre de cada cliente y el nombre y apellido de su representante de ventas.

export const getAllClientsAndManager = async() => {

    let res = await fetch("http://localhost:5501/clients")
    let dataCliente = await res.json()

    for (let i = 0; i < dataCliente.length; i++) {
        let {
            id,
            contact_name,
            contact_lastname,
            phone,
            fax,
            address1,
            address2,
            city,
            region,
            country,
            postal_code,
            limit_credit,
        ...dataUpdate} = dataCliente[i]
        let [employee] = await getEmployeesByCode(dataCliente[i].code_employee_sales_manager)
        let {
            id: id_employee,
            extension,
            email,
            code_office,
            code_boss,
            position,
            ...EmployeeUpdate
        } = employee
        
        let dataPrint = {...dataUpdate, ...EmployeeUpdate}
        dataCliente[i] = {

            client_name : dataPrint.client_name,
            employee_full_name : `${dataPrint.name} ${dataPrint.lastname1} ${dataPrint.lastname2}`


        }
    }

    return dataCliente

}

//3. Muestra el nombre de los clientes que no hayan realizado pagos junto con el nombre de sus representantes de ventas.

export const getAllClientsWithNoPayments = async() => {

    let res = await fetch("http://localhost:5501/clients")
    let cliente = await res.json()
    let data = []
    let dataPrint1 = []
    for (let i = 0; i < cliente.length; i++) {
        
        let {contact_name,
            contact_lastname,
            phone,
            fax,
            address1,
            address2,
            city,
            region,
            country,
            postal_code,
            limit_credit,
            id,
        ...updateCliente} = cliente[i]
        let [payments] = await getPaymentsByCode_client(cliente[i].client_code)
        cliente[i].payments = payments
        let [empleado] = await getEmployeesByCode(cliente[i].code_employee_sales_manager)
        let {employee_code,
            extension,
            email,
            code_office,
            code_boss,
            position,
        ...updateEmpleado} = empleado
        cliente[i].code_employee_sales_manager = empleado
        
        if (payments){

        }
        else{
            data = {...updateCliente, ...updateEmpleado}
            let dataPrint = {
                client_name : data.client_name,
                manager_name : `${data.name} ${data.lastname1} ${data.lastname2}`

            }
            dataPrint1.push(dataPrint)

        }
        
    }

    return dataPrint1

}


