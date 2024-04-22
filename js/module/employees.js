//3. Devuelve un listado con el nombre, apellido y email de los empleados cuyo jefe tiene un codigo de jefe igual a 7


export const getAllFullNameAndEmail = async() => {

    let res = await fetch("http://localhost:5502/employee?code_boss=7")
    let data = await res.json()
    let dataUpdate = data.map(val => {
        return {

            name: val.name,
            lastname: `${val.lastname1} ${val.lastname2}`,
            email: val.email.match(/(?<=mailto:)[^\s<>]+/)[0]

        }
    })

    return dataUpdate

} 

//4. Devuelve el nombre del puesto, nombre, apellidos y email del jefe de la empresa


export const getNameLastnameEmailBoss = async() => {

    let res = await fetch("http://localhost:5502/employee?code_boss_ne=")
    let data = await res.json()
    let dataUpdate = data.map(val => {
        return {

            name: val.name,

        }
    })

    return dataUpdate


}