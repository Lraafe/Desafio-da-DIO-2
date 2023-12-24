let playerVictories = 98
let playerLosses = 20
let playerRank
let legendaryItem = true

function main() {
    rank(cal())
    notification(cal())
}

function cal() {
    let resul = playerVictories - playerLosses
    return resul
}

function rank(result) {
    if(result < 10) {
        playerRank = "Ferro"
    }else if(result >= 11 && result <= 20) {
        playerRank = "Bronze"
    }else if(result >= 21 && result <= 50) {
        playerRank = "Prata"
    }else if(result >= 51 && result <= 80) {
        playerRank = "Ouro"
    }else if(result >= 81 && result <= 90) {
        playerRank = "Diamante"
    }else if(result >= 91 && result <= 100) {
        playerRank = "Lendário"
    }else if(result >= 101) {
        playerRank = "Imortal"
    }
    if(playerVictories > 1) {
        console.log(`O Herói tem de saldo de ${playerVictories} está no nível de ${playerRank}`) 
    }
    
}

function notification(resul) {
    if(resul <= 1 && legendaryItem == true) {
        for(let i = 0; i < 5; i++) {
            console.log("Seu nivel está MUITO baixo, jogue mais para liberar este item.")
        }
    }
}

main()