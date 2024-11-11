//GFT's Calculator

//Variable Hero's Victorys
let win = 85

//Variable Hero's Lost
let lose = 6

//Variable Hero's level
let level

//Variable Victorys and Loss Balance
let result = balance(win, lose)

//Function for Calculation 
function balance() {
    return win - lose
}

// Desicion Structure to determine the Hero's level based on th XP
if (result <= 10) {
    level = "Ferro"
}   else if (result >= 11 && result <=20){
    level = "Bronze"
}   else if (result >= 21 && result <= 50) {
    level = "Prata"
}   else if (result >= 51 && result <= 80) {
    level = "Ouro"
}   else if (result >= 81 && result <= 90) {
    level = "Diamante"
}   else if (result >= 91 && result <= 100) {
    level = "Lendário"
}   else 
    level = "Imortal"

console.log(`O Herói tem saldo de ${result} e está no nível ${level}!`)
