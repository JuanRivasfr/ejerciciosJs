export const distancia = (palabra1, palabra2) =>{

    
    let x = palabra1.split("")
    let y = palabra2.split("")

    return  x.reduce((acumulador, elemento, index)=> {

        if (elemento !== y[index]){

            return acumulador + 1 

        }

        return acumulador

    },0)


}