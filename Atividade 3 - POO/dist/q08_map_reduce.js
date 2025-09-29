"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// Usando lambda ou Arrow fuction
let dobrados = lista.map(valor => valor * 2);
let somatorio = lista.reduce((valor, total) => valor + total, 0);
console.log(lista);
console.log(dobrados);
console.log(somatorio);
console.log();
// Usando funções auxiliares
let dobrados1 = lista.map(dobrar);
let somatorio1 = lista.reduce(somar, 0);
console.log(dobrados1);
console.log(somatorio1);
function dobrar(numero) {
    return numero * 2;
}
function somar(x, y) {
    return x + y;
}
