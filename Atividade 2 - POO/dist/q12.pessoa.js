"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    nome;
    idade;
    constructor(n, i) {
        this.nome = n;
        this.idade = i;
    }
    apresentar() {
        return `Meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}
let pessoa1 = new Pessoa('Ely', 46);
console.log(pessoa1.apresentar());
