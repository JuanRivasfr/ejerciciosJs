export const bmi = (peso, altura) =>{

    let cbmi = parseFloat(peso / (altura*altura));
    if (cbmi < 18.5){
        return "Bajo de peso"
    }
    else if (cbmi >= 18.5 && cbmi <= 24.9){
        return "Normal"
    }
    else if(cbmi >= 25 && cbmi <= 29.9){
        return "Sobrepeso"
    }
    else if(cbmi >= 30){
        return "Obeso"
    }

}