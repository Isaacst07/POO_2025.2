"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Retangulo {
    // atributos
    lado1 = 0;
    lado2 = 0;
    //método
    calcularArea() {
        return this.lado1 * this.lado2;
    }
    calcularPerimetro() {
        return (2 * this.lado1) + (2 * this.lado2);
    }
}
let retangulo1 = new Retangulo();
/*  objeto ↑     o operador new intancia ou cria um objeto.
    Retangulo() se chama construtor
*/
// alterando o valor os atributos
retangulo1.lado1 = 10;
retangulo1.lado2 = 20;
// chamando o método do retângulo chamado calcular área
console.log(retangulo1.calcularArea());
console.log(retangulo1.calcularPerimetro());
let retangulo2 = new Retangulo();
retangulo2.lado1 = 5;
retangulo2.lado2 = 10;
console.log(retangulo2.calcularArea());
console.log(retangulo2.calcularPerimetro());
