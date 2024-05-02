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