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