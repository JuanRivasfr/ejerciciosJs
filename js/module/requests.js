//7. Devuelve un listado con los distintos estados por los que puede 
//pasar un pedido.

export const getStatus = async() => {

    let res = await fetch("http://localhost:5508/requests")
    let data = await res.json()
    let aux = []
    let dataUpdate = data.map(val => (val.status))
    let dataPrint = new Set(dataUpdate)

    return Array.from(dataPrint)

}