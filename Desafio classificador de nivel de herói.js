// Matriz de heróis [Nome, XP]
let herois = [
    ["Superman", 11000],
    ["Batman", 8500],
    ["Mulher Maravilha", 6000],
    ["Arqueiro Verde", 1500]
];

// Laço de repetição para percorrer os heróis
for (let i = 0; i < herois.length; i++) {

    let nome = herois[i][0];
    let xp = herois[i][1];
    let nivel;

    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp <= 2000) {
        nivel = "Bronze";
    } else if (xp <= 5000) {
        nivel = "Prata";
    } else if (xp <= 7000) {
        nivel = "Ouro";
    } else if (xp <= 8000) {
        nivel = "Platina";
    } else if (xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    console.log("O Herói de nome " + nome + " está no nível de " + nivel);
}
