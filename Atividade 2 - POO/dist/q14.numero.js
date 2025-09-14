"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Numero {
    valor;
    constructor(v) {
        this.valor = v;
    }
    ehPar() {
        return this.valor % 2 == 0;
    }
    ehImpar() {
        return this.valor % 2 != 0;
    }
}
let numero1 = new Numero(12);
console.log(`O número ${numero1.valor} é par: ${numero1.ehPar()}`);
console.log(`O número ${numero1.valor} é par: ${numero1.ehImpar()}`);
