export const likes = (num) =>{
    let aux = num.length;
    if (aux < 4){
        return num
    }
    else if (aux === 4){
        return (num.charAt(0)+"K");
    }
    else if (aux === 5){
        return (num.charAt(0)+num.charAt(1)+"K");
    }
    else if (aux === 6){
        return (num.charAt(0)+num.charAt(1)+num.charAt(2)+"K");
    }
    else if (aux > 6){
        return (num.charAt(0)+"M");
    }
}