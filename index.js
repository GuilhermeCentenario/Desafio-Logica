let nivelHeroi = 7900
let fraseNivel = "Herói nivel: "

if (nivelHeroi <= 1000){
    console.log(fraseNivel + "Ferro")
} 
else if (nivelHeroi > 1000 && nivelHeroi <= 2000){
    console.log(fraseNivel + "Bronze")
} 
else if (nivelHeroi > 2000 && nivelHeroi <= 5000){
    console.log(fraseNivel + "Prata Ouro")
}
else if (nivelHeroi > 5000 && nivelHeroi <= 8000){
    console.log(fraseNivel + "Platina Diamante")
}  
else if (nivelHeroi > 8000 && nivelHeroi <= 9000){
    console.log(fraseNivel + "Ascendente")
}  
else if (nivelHeroi > 9000 && nivelHeroi <= 10000){
    console.log(fraseNivel + "Imortal")
}  
else if (nivelHeroi > 10000){
    console.log(fraseNivel + "Radiante")
}      