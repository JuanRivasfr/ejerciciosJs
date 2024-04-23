export const password = (palabra) =>{

    let array = palabra.split(/ |/)

    for (let i = 0; i < array.length; i++) {
        
        if (array[i] === "a"){

            array[i] = 4

        }
        else if (array[i] === "e"){

            array[i] = 3

        }
        else if (array[i] === "i"){

            array[i] = 1

        }
        else if (array[i] === "o"){

            array[i] = 0

        }
        
        
    }

    return array.join("")

}