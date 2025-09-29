"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class JogoParImpar {
    numerojogador;
    numeromaquina;
    constructor(nj) {
        this.numerojogador = nj;
        this.numeromaquina = this.sortearMaquina();
    }
    sortearMaquina() {
        return Math.floor(Math.random() * 10) + 1;
    }
    resultado() {
        return (this.numerojogador + this.numeromaquina) % 2 == 0;
    }
    vencedor() {
        if (this.resultado() == true) {
            return 'Jogador';
        }
        else {
            return 'Máquina';
        }
    }
}
let jogo1 = new JogoParImpar(4);
console.log(`Número da máquina: ${jogo1.numeromaquina}`);
console.log(`O vencendor é: ${jogo1.vencedor()}`);
