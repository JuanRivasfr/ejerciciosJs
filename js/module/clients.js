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