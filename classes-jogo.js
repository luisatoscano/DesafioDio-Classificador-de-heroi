// Classe genérica que representa um herói
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        if (this.tipo === "mago") {
            ataque = "magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo === "monge") {
            ataque = "artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "shuriken";
        }

        console.log("O " + this.tipo + " atacou usando " + ataque);
    }
}

// ===============================
// Instanciando o herói
// ===============================

let heroi = new Heroi("Arthas", 30, "guerreiro");

// Chamando o método atacar
heroi.atacar();
