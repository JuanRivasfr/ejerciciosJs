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

//9. Devuelve un listado con el código de pedido, código de cliente, fecha esperada 
//y fecha de entrega de los pedidos que no han sido entregados a tiempo.

export const getAllOrderCodeClientCodeDateWaitDateRequest = async() => {
    let res = await fetch("http://localhost:5508/requests")
    let data = await res.json()
    let dataUpdate = []
    data.forEach(val => {
        let[year, month, day] = val.date_wait.split("-")
        let year1 = 0
        let month1 = 0
        let day1 = 0
        if (val.date_delivery) {
            [year1, month1, day1] = val.date_delivery.split("-")
        } 
        [year, year1, month, month1, day, day1] = [year, year1, month, month1, day, day1].map(num => parseInt(num));
        if (year < year1 || year == year1 && month < month1 || year == year1 && month == month1 && day < day1){
            dataUpdate.push(val);
        }
    })
    let dataPrint = dataUpdate.map(val => {
        return {
            code_request : val.code_request,
            code_client : val.code_client,
            date_wait: val.date_wait,
            date_delivery : val.date_delivery
        }
    })
    return dataPrint
}

//10. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los 
//pedidos cuya fecha de entrega ha sido al menos dos días antes de la fecha esperada.

export const getRequestCodeClientCodeDateAwaitDateDelivery2 =  async () =>{

    let res = await fetch("http://localhost:5508/requests")
    let data = await res.json()
    let dataUpdate = []
    let day1 = null;
    let month1 = null;

    data.forEach(val => {

        let [, month, day] = val.date_wait.split("-") 
        
        if (val.date_delivery){
            [, month1, day1] = val.date_delivery.split("-")

            day = parseInt(day)
            day1 = parseInt(day1)
            month = parseInt(month)
            month1 = parseInt(month1)

            if (month > month1 || month >= month1 && day-2 >= day1){
                dataUpdate.push(val)
            }

        }
        
    })

    let dataPrint = dataUpdate.map(val => {

        return {

            code_request : val.code_request,
            code_client : val.code_client,
            date_wait : val.date_wait,
            date_delivery : val.date_delivery,

        }

    })

    return dataPrint

}

//11. Devuelve un listado de todos los pedidos que fueron rechazados en 2009

export const getRejectedRequestAt2009 = async() => {

    let res = await fetch("http://localhost:5508/requests")
    let data = await res.json()
    let dataUpdate = []

    data.forEach(val => {

        let [año] = val.date_request.split("-")

        if (año === "2009" && val.status === "Rechazado"){

            dataUpdate.push(val)

        }

    })

    return dataUpdate

}

//12. Devuelve un listado de todos los pedidos que han sido entregados 
//en el mes de enero de cualquier año.

export const getAllRequestMadeInJanuary = async () => {

    let res = await fetch("http://localhost:5508/requests")
    let data = await res.json()
    let dataUpdate = []
    
    data.forEach(val => {

        if (val.date_delivery){
            
            let [, month] = val.date_delivery.split("-")
            
            if (month === "01"){
                dataUpdate.push(
                    {
                        date_delivery : val.date_delivery,
                        code_request : val.code_request
                    }
                )
            }
        }

    })

    return dataUpdate

}

