//1. Devuelve un listado con el codigo de oficinas y la ciudad

export const getAllOficceCodeCity = async() =>{
 
    let res = await fetch("http://localhost:5504/offices")
    let data = await res.json()
    let dataUpdate = data.map(val => {
        return {
            city: val.city,
            code_office: val.code_office
        }
    })

    return dataUpdate
}

//2. Devuelve un listado con la ciudad y el telefono de las oficinas de España

export const getAllOficceCityAndMovil = async() =>{
    let res = await fetch("http://localhost:5504/offices?country=España")
    let data = await res.json()
    let dataUpdate = data.map(val => {
        return {
            code_office: val.code_office,
            movil: val.movil
        }
    })

    return dataUpdate

}


