// Função que calcula o saldo de vitórias e define o nível
function calcularRank(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return { saldoVitorias, nivel };
}

// ===============================
// Execução do programa
// ===============================

let vitorias = 75;
let derrotas = 20;

let resultado = calcularRank(vitorias, derrotas);

console.log(
    "O Herói tem de saldo de " +
    resultado.saldoVitorias +
    " está no nível de " +
    resultado.nivel
);
