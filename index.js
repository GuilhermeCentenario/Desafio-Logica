let nomeHeroi = "Guilherme"
let nivelHeroi = 7900
let fraseNivel = "O herói de nome " + nomeHeroi + " está no nível de"

if (nivelHeroi <= 1000){
    console.log(fraseNivel + " Ferro")
} 
else if (nivelHeroi > 1000 && nivelHeroi <= 2000){
    console.log(fraseNivel + " Bronze")
} 
else if (nivelHeroi > 2000 && nivelHeroi <= 6000){
    console.log(fraseNivel + " Prata")
}
else if (nivelHeroi > 6000 && nivelHeroi <= 7000){
    console.log(fraseNivel + " Ouro")
}
else if (nivelHeroi > 7000 && nivelHeroi <= 8000){
    console.log(fraseNivel + " Platina")
}  
else if (nivelHeroi > 8000 && nivelHeroi <= 9000){
    console.log(fraseNivel + " Ascendente")
}  
else if (nivelHeroi > 9000 && nivelHeroi <= 10000){
    console.log(fraseNivel + " Imortal")
}  
else if (nivelHeroi > 10000){
    console.log(fraseNivel + " Radiante")
}      