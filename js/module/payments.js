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
    
    return dataUpdate;


}