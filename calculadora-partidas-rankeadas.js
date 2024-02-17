


let vitorias = 40
let derrotas = 10
let resultado = calcularNivel(vitorias,derrotas)

//Calculo da Partida
function calcularNivel(vitorias, derrotas){
    let saldo = vitorias - derrotas
    return saldo
}

//Nivel do jogador
if (vitorias < 10){
    nivel = "Ferro"
}    
else if (vitorias >= 11 && vitorias <= 20){
    nivel = "Bronze"
}        
else if (vitorias >= 21 && vitorias <= 50){
    nivel = "Prata"
}   
else if (vitorias >= 51 && vitorias <= 80){
    nivel = "Ouro"
}    
else if (vitorias >= 81 && vitorias <= 90){
    nivel = "Diamante"
}
else if (vitorias >= 91 && vitorias <= 100){
    nivel = "Lendário"
}   
else{
    nivel = "Imortal"    
}

console.log("O Herói tem saldo " +  resultado + " vitórias e está no nível de " + nivel)






   
