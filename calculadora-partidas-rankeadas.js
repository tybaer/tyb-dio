let vitorias = " "
let derrotas = " "

//Calculo da Partida
function calcularNivel(vitorias, derrotas){
    saldo = vitorias - derrotas
    return saldo

    console.log("O Herói tem saldo " + saldo + "e está no nível de " + nivel)
}

//Nivel do jogador
function nivelJogador 
    
    if vitorias < 10:
        nivel = "Ferro"
    elif 11 <= vitorias <= 20:
        nivel = "Bronze"
    elif 21 <= vitorias <= 50:
        nivel = "Prata"
    elif 51 <= vitorias <= 80:
        nivel = "Ouro"
    elif 81 <= vitorias <= 90:
        nivel = "Diamante"
    elif 91 <= vitorias <= 100:
        nivel = "Lendário"
    else:
        nivel = "Imortal"

    # Exibe a mensagem com o saldo e o nível
    mensagem = f"O Herói tem saldo de {saldo_rankeadas} e está no nível de {nivel}"
    retornar mensagem

# Exemplo de uso da função
vitorias = 60
derrotas = 20
resultado = calcular_nivel(vitorias, derrotas)
exibir(resultado)
